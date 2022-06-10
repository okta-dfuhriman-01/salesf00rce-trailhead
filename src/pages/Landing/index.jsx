import { Auth, Okta, React } from '../../common';

import Home from '../../components/Home';
import PageSpinner from '../../components/PageSpinner';
import Today from '../../components/Today';

const LandingPage = () => {
	const { oktaAuth } = Okta.useOktaAuth();

	const { _initialized, isLoading } = Auth.useAuthState();

	return (
		<>
			{isLoading && <PageSpinner />}
			{!oktaAuth.isAuthenticated() && <Home />}
			{_initialized && oktaAuth.isAuthenticated() && <Today />}
		</>
	);
};

export default LandingPage;
