import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import RootLayout from './layouts/RootLayout';
import LandingPage from './routes/LandingPage/LandingPage';
import PortfolioPage from './routes/PortfolioPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'portfolio', element: <PortfolioPage /> },
      // { path: 'projects', element: <ProjectsPage /> },
      // { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
