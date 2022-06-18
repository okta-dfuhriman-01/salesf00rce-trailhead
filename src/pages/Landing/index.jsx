import { Auth, Okta, React } from '../../common';

import Home from '../../components/Home';
import PageSpinner from '../../components/PageSpinner';
import Today from '../../components/Today';

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
			{/* {!oktaAuth.isAuthenticated() && <Home />}
			{_initialized && oktaAuth.isAuthenticated() && <Today />} */}
		</>
	);
};

export default LandingPage;
