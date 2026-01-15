import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';
import { JSX } from 'solid-js';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PublicLayout from './layouts/PublicLayout';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import ProtectedRoute from './layouts/ProtectedRoute';


const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: () => (
      <ProtectedRoute>
        <AuthenticatedLayout>
          <Dashboard />
        </AuthenticatedLayout>
      </ProtectedRoute>
    ),
  },
  // {
  //   path: '**',
  //   component: lazy(() => import('./errors/404')),
  // },
];

export default routes; 