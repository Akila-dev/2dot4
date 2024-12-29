import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';

import {
	Home,
	About,
	Technology,
	Diamonds,
	Applications,
	Contact,
	Discover,
	Atelier,
	ErrorPage,
	PrivacyPolicy,
	Manifesto,
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
		path: '/diamonds',
		element: <Diamonds />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/contact',
		element: <Contact />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/applications',
		element: <Applications />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/discoverrr',
		element: <Discover />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/manifesto',
		element: <Manifesto />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/discover',
		element: <Manifesto />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/privacy',
		element: <PrivacyPolicy />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/atelier',
		element: <Atelier />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
