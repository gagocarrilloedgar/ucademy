import { Link, Outlet } from 'react-router-dom';

import { ErrorBoundary } from './ErrorBoundary';
import { LayoutHeader, LayoutLogo } from './Layout.styles';

export const Layout = () => {
  return (
    <>
      <LayoutHeader>
        <Link to="/">
          <LayoutLogo src="/assets/Logo.png" alt="logo" />
        </Link>
      </LayoutHeader>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
};
