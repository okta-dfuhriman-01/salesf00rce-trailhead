import { Auth, ReactRouter } from './common';

import { TrailheadHeader, SecureApp } from './components';
import AppLoginCallback from './pages/AppLoginCallback';
import Loading from './pages/Loading';
import LandingPage from './pages/Landing';
import TodayPage from './pages/Today';

const Router = () => {
	const { isLoading } = Auth.useAuthState();

	const navigate = ReactRouter.useNavigate();

	const location = ReactRouter.useLocation();

	const showHeader = location.pathname !== '/login/callback';

	return (
		<>
			{showHeader && <TrailheadHeader />}
			<ReactRouter.Routes>
				<ReactRouter.Route path='/login/callback' element={<AppLoginCallback />} />
				<ReactRouter.Route path='/' element={<LandingPage />} />
				<ReactRouter.Route
					element={<SecureApp onAuthRequired={() => navigate('/', { replace: true })} />}
				>
					<ReactRouter.Route path='/today' element={!isLoading ? <TodayPage /> : <Loading />} />
				</ReactRouter.Route>
			</ReactRouter.Routes>
		</>
	);
};

export default Router;
