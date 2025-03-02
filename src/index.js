import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './Store/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PeopleRegister from './Components/PeopleRegister';
import FleetRegister from './Components/FleetComponents/FleetRegister';
import EmployeeList from './Components/EmployeeList';
import FleetList from './Components/FleetComponents/FleetList';
import PeopleUpdate from './Components/PeopleUpdate';
import FleetUpdate from './Components/FleetComponents/FleetUpdate';
import Dashboard from './Components/Dashboard';
import LandingComponent from './Components/PriceComparison/LandingComponent'
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/people/register',
        element: <PeopleRegister />,
      },
      {
        path: "/people/employeeList",
        element: <EmployeeList />,
      },
      {
        path: "/people/update/",
        element: <PeopleUpdate />,
      },
      {
        path:"/fleet/register",
        element: <FleetRegister />,
      },
      {
        path: "/fleet/fleetList",
        element: <FleetList />,
      },
      {
        path: "/fleet/update/",
        element: <FleetUpdate />,
      },
      {
        path: "/fleet/dashboard/",
        element: <Dashboard />
      },
      {
        path: "/price/",
        element: <LandingComponent />
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
