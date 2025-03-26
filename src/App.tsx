import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import RootLayout from './layouts/RootLayout';
import LandingPage from './routes/LandingPage';
import HomePage from './routes/HomePage';
import ProjectsPage from './routes/ProjectsPage';
import ContactPage from './routes/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
