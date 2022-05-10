import { Auth, React } from '../../common';

import Home from '../../components/Home';
import PageSpinner from '../../components/PageSpinner';
import Today from '../../components/Today';

const LandingPage = () => {
	const { _initialized, isAuthenticated, isLoading } = Auth.useAuthState();

	return (
		<>
			{isLoading && <PageSpinner />}
			{!isAuthenticated && <Home />}
			{_initialized && isAuthenticated && <Today />}
		</>
	);
};

export default LandingPage;
