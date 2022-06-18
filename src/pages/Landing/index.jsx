import { Auth, Okta, React } from '../../common';

import { Home, PageSpinner, Today } from '../../components';

const LandingPage = () => {
	const { oktaAuth } = Okta.useOktaAuth();

	const { _initialized, isLoading } = Auth.useAuthState();

	const [page, setPage] = React.useState(<Home />);

	React.useEffect(() => {
		oktaAuth
			.isAuthenticated()
			.then(resp => (resp && _initialized ? setPage(() => <Today />) : setPage(() => <Home />)));
	}, [_initialized, oktaAuth]);

	return (
		<>
			{isLoading && <PageSpinner />}
			{page}
		</>
	);
};

export default LandingPage;
