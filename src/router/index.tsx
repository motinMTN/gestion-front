import { Route, Outlet } from 'react-router-dom';
import { lazy, Fragment, Suspense } from 'react';
import { RouteProps } from '../interfaces/RouteProps';
import * as GENERAL_PATHS from './paths/general_paths';
import * as DASHBOARD_PATHS from './paths/dashboard_paths';
import Spinner from '../components/spinner/Spinner';

export const renderRoutes = (routes: RouteProps[]) => {
  return routes.map((route, index) => {
    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    const Guard = route.guard || Fragment;
    
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={<Spinner/>}>
            <Guard>
              <Layout>
                {route.children ? <Outlet /> : <Component /> || Fragment}
              </Layout>
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
}

export const routes: RouteProps[] = [
  //public routes
  {
    // path: "/login",
    path: GENERAL_PATHS.PATH_LOGIN,
    element: lazy(async () => await import('../features/auth/components/login/Login')), 
  },
  {
    path: GENERAL_PATHS.PATH_REGISTER,
    element: lazy(async () => await import('../features/auth/components/register/Register')),
  },
  {
    path: GENERAL_PATHS.PATH_FORGOT_PASSWORD,
    element: lazy(async () => await import('../features/auth/components/resetPassword/ForgotPassword')),  
  },
  {
    path: GENERAL_PATHS.PATH_RESET_PASSWORD,
    element: lazy(async () => await import('../features/auth/components/resetPassword/FormResetPassword')),
    
  },
  {
    path: GENERAL_PATHS.PATH_NOT_FOUND,
    element: lazy(async () => await import('../components/not_found/NotFound')),
  },
  //protected routes by user authenticated (AuthGuard)
  {
    layout: lazy(async () => await import('../layouts/dashboards/DashboardLayout')),
    guard: lazy(async () => await import('../guards/AuthGuard')),
    children: [
      {
        // path: "/dashboard/home",
        path: DASHBOARD_PATHS.PATH_HOME,
        element: lazy(async () => await import('../features/dashboard/pages/home/Home')),
      },
      {
        // path: "/dashboard/appointments",
        path: DASHBOARD_PATHS.PATH_APPOINTMENTS,
        element: lazy(async () => await import('../features/dashboard/pages/appointments/Distributor')),
      },
      {
        // path: "/dashboard/patients",
        path: DASHBOARD_PATHS.PATH_PATIENTS,
        element: lazy(async () => await import('../features/dashboard/pages/patients/Patients')),
      },
      {
        path: DASHBOARD_PATHS.PATH_DOCTORS,
        element: lazy(async () => await import('../features/dashboard/pages/doctors/Doctors')),
      },
      {
        path: DASHBOARD_PATHS.PATH_REFERENTS,
        element: lazy(async () => await import('../features/dashboard/pages/referents/Referents')),
        // element: lazy(async () => await import('../components/spinner/Spinner')),
      },
      {
        path: DASHBOARD_PATHS.PATH_DEMOS,
        element: lazy(async () => await import('../features/dashboard/pages/demos/Demos')),
      },
      {
        path: DASHBOARD_PATHS.PATH_ACCOUNT,
        element: lazy(async () => await import('../features/dashboard/pages/account/Account')),
      },
      {
        // path: "/dashboard/appointments",
        path: DASHBOARD_PATHS.PATH_DISTRIBUTORS,
        element: lazy(async () => await import('../features/dashboard/pages/distributors/Distributor')),
      },
      {
        path: DASHBOARD_PATHS.PATH_BRANCHES,
        element: lazy(async () => await import('../features/dashboard/pages/branches/BranchesList')),
      },
      {
        path: DASHBOARD_PATHS.PATH_BRANCH_CREATE,
        element: lazy(async () => await import('../features/dashboard/pages/branches/BranchCreate')),
      },
      {
        path: DASHBOARD_PATHS.PATH_BRANCH_EDIT,
        element: lazy(async () => await import('../features/dashboard/pages/branches/BranchEdit')),
      },
      {
        path: DASHBOARD_PATHS.PATH_ADMINISTRATION,
        element: lazy(async () => await import('../features/dashboard/pages/administration/Administration')),
      },
    ]    
  },
  {
    path: "*",
    element: lazy(async () => await import('../components/not_found/NotFound')),
  }
];
