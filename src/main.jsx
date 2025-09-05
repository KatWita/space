import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './pages/Home.jsx'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/technology.jsx'
import { destinations, crew, technology } from './data.json'

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: 'destination',
				Component: Destination,
				loader: () => {
					return destinations
				},
			},
			{
				path: 'crew',
				Component: Crew,
				loader: () => {
					return crew
				},
			},
			{
				path: 'technology',
				Component: Technology,
				loader: () => {
					return technology
				},
			},
		],
	},
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
