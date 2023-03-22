import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './sections/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <>main</>,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
