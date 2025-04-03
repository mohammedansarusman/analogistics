import React from 'react';
import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './Store/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LazyPeopleRegister = lazy(() => import('./Components/PeopleRegister'));
const LazyFleetRegister = lazy(() => import('./Components/FleetComponents/FleetRegister'));
const LazyEmployeeList = lazy(() => import('./Components/EmployeeList'));
const LazyFleetList = lazy(() => import('./Components/FleetComponents/FleetList'));
const LazyPeopleUpdate = lazy(() => import('./Components/PeopleUpdate'));
const LazyFleetUpdate = lazy(() => import('./Components/FleetComponents/FleetUpdate'));
const LazyDashboard = lazy(() => import('./Components/Dashboard'));
const LazyLandingComponent = lazy(() => import('./Components/PriceComparison/LandingComponent'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/people/register',
        element: <Suspense fallback={<h1>loading...</h1>}><LazyPeopleRegister /></Suspense>,
      },
      {
        path: "/people/employeeList",
        element: <Suspense fallback={<h1>loading...</h1>}><LazyEmployeeList /></Suspense>,
      },
      {
        path: "/people/update/",
        element: <Suspense fallback={<h1>loading...</h1>}><LazyPeopleUpdate /></Suspense>,
      },
      {
        path:"/fleet/register",
        element: <Suspense fallback={<h1>loading...</h1>}><LazyFleetRegister /></Suspense>,
      },
      {
        path: "/fleet/fleetList",
        element: <Suspense fallback={<h1>loading...</h1>}><LazyFleetList /></Suspense>,
      },
      {
        path: "/fleet/update/",
        element: <Suspense fallback={<h1>loading...</h1>}><LazyFleetUpdate /></Suspense>,
      },
      {
        path: "/dashboard/",
        element: <Suspense fallback={<h1>loading...</h1>}><LazyDashboard /></Suspense>,
      },
      {
        path: "/price/",
        element: <Suspense fallback={<h1>loading...</h1>}><LazyLandingComponent /></Suspense>,
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Provider store = {appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
  // </React.StrictMode>
);


reportWebVitals();
