import { createBrowserRouter } from 'react-router-dom';
import { Home, Login } from '../pages';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default routes;
