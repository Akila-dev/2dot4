import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';

import {
	Home,
	About,
	Technology,
	Diamond,
	Application,
	Contact,
	ErrorPage,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/about',
		element: <About />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/technology',
		element: <Technology />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/diamond',
		element: <Diamond />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/contact',
		element: <Contact />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/application',
		element: <Application />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
