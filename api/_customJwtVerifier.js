import jwksRSA from 'jwks-rsa';
import nJwt from 'njwt';

const ORG_URL = process.env.REACT_APP_OKTA_URL;
const AUTH_SERVER_ID = process.env.REACT_APP_AUTH_SERVER_ID;
const ISSUER = `${ORG_URL}/oauth2/${AUTH_SERVER_ID}`;
const CLIENT_ID = process.env.REACT_APP_OKTA_CLIENT_ID;

const findDomainURL = 'https://bit.ly/finding-okta-domain';
const findAppCredentialsURL = 'https://bit.ly/finding-okta-app-credentials';

class ConfigurationValidationError extends Error {}

class AssertedClaimsVerifier {
	constructor() {
		this.errors = [];
	}

	extractOperator(claim) {
		const idx = claim.indexOf('.');
		if (idx >= 0) {
			return claim.substring(idx + 1);
		}
		return undefined;
	}

	extractClaim(claim) {
		const idx = claim.indexOf('.');
		if (idx >= 0) {
			return claim.substring(0, idx);
		}
		return claim;
	}

	isValidOperator(operator) {
		// may support more operators in the future
		return !operator || operator === 'includes';
	}

	checkAssertions(op, claim, expectedValue, actualValue) {
		if (!op && actualValue !== expectedValue) {
			this.errors.push(
				`claim '${claim}' value '${actualValue}' does not match expected value '${expectedValue}'`
			);
		} else if (op === 'includes' && Array.isArray(expectedValue)) {
			expectedValue.forEach(value => {
				if (!actualValue || !actualValue.includes(value)) {
					this.errors.push(
						`claim '${claim}' value '${actualValue}' does not include expected value '${value}'`
					);
				}
			});
		} else if (op === 'includes' && (!actualValue || !actualValue.includes(expectedValue))) {
			this.errors.push(
				`claim '${claim}' value '${actualValue}' does not include expected value '${expectedValue}'`
			);
		}
	}
}

const assertIssuer = (issuer, testing = {}) => {
	const isHttps = new RegExp('^https://');
	const hasDomainAdmin = /-admin.(okta|oktapreview|okta-emea).com/;
	const copyMessage =
		'You can copy your domain from the Okta Developer ' +
		'Console. Follow these instructions to find it: ' +
		findDomainURL;

	if (testing?.disableHttpsCheck) {
		const httpsWarning =
			'Warning: HTTPS check is disabled. ' +
			'This allows for insecure configurations and is NOT recommended for production use.';

		console.warn(httpsWarning);
	}

	if (!issuer) {
		throw new ConfigurationValidationError(`Your Okta URL is missing. ${copyMessage}`);
	} else if (!testing.disableHttpsCheck && !issuer.match(isHttps)) {
		throw new ConfigurationValidationError(
			`Your Okta URL must start with https. Current value: ${issuer} ${copyMessage}`
		);
	} else if (issuer.match(/{yourOktaDomain}/)) {
		throw new ConfigurationValidationError(
			'Replace {yourOktaDomain} with your Okta domain. ' + copyMessage
		);
	} else if (issuer.match(hasDomainAdmin)) {
		throw new ConfigurationValidationError(
			`Your Okta domain should not contain -admin. Current value: ${issuer}. ${copyMessage}`
		);
	}
};

const assertClientId = clientId => {
	const copyCredentialsMessage =
		'You can copy it from the Okta Developer Console ' +
		'in the details for the Application you created. ' +
		`Follow these instructions to find it: ${findAppCredentialsURL}`;

	if (!clientId) {
		throw new ConfigurationValidationError(`Your client ID is missing. ${copyCredentialsMessage}`);
	} else if (clientId.match(/{clientId}/)) {
		throw new ConfigurationValidationError(
			`Replace {clientId} with the client ID of your Application. ${copyCredentialsMessage}`
		);
	}
};

const verifyAssertedClaims = (verifier, claims) => {
	const assertedClaimsVerifier = new AssertedClaimsVerifier();
	for (const [claimName, expectedValue] of Object.entries(verifier.claimsToAssert)) {
		const operator = assertedClaimsVerifier.extractOperator(claimName);
		if (!assertedClaimsVerifier.isValidOperator(operator)) {
			throw new Error(`operator: '${operator}' invalid. Supported operators: 'includes'.`);
		}
		const claim = assertedClaimsVerifier.extractClaim(claimName);
		const actualValue = claims[claim];
		assertedClaimsVerifier.checkAssertions(operator, claim, expectedValue, actualValue);
	}
	if (assertedClaimsVerifier.errors.length) {
		throw new Error(assertedClaimsVerifier.errors.join(', '));
	}
};

export default class JwtVerifier {
	constructor(options) {
		this.issuer = options?.issuer || ISSUER;
		this.clientId = options?.clientId || CLIENT_ID;

		assertIssuer(this.issuer, options?.testing);
		assertClientId(this.clientId);

		this.claimsToAssert = options?.assertClaims || {};
		this.jwksUri = this.issuer + '/v1/keys';
		this.jwksClient = jwksRSA({
			jwksUri: this.jwksUri,
			cache: true,
			cacheMaxAge: 60 * 60 * 1000,
			cacheMaxEntries: 3,
			jwksRequestsPerMinutes: 10,
			rateLimit: true,
		});
		this.verifier = nJwt
			.createVerifier()
			.setSigningAlgorithm('RS256')
			.withKeyResolver((kid, cb) => {
				if (kid) {
					this.jwksClient.getSigningKey(kid, (err, key) => {
						cb(err, key && (key.publicKey || key.rsaPublicKey));
					});
				} else {
					cb('No KID specified', null);
				}
			});
	}

	async verifyAsPromise(tokenString, verifier = this.verifier) {
		return new Promise((resolve, reject) => {
			verifier.verify(tokenString, (err, jwt) => {
				if (err) {
					return reject(err);
				}

				jwt.claims = jwt.body;
				delete jwt.body;

				resolve(jwt);
			});
		});
	}

	async verifyIdToken(idTokenString) {
		// njwt verifies expiration and signature
		// We require RS256 in the base verifier
		// Issuer is validated by constructor
		// Audience claim is validated by constructor (clientId)
		//
		// Remaining to verify:
		// - any custom claims

		const jwt = await this.verifyAsPromise(idTokenString);

		verifyAssertedClaims(this, jwt.claims);

		return jwt;
	}
}
