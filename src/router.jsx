import { createBrowserRouter } from 'react-router-dom';
import Contact from '../pages/Contact';
import About from '../pages/About.jsx';
import Layout from './components/layout/Layout.jsx';
import Home from '../pages/Home.jsx';
import Userinfo from '../pages/Userinfo.jsx';

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'userinfo/:id',
        element: <Userinfo />,
      },
    ],
  },
]);