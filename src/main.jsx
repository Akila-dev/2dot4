import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';

import { Home, ErrorPage } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/about',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/technology',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/diamond',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/application',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
