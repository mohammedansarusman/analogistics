import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './Store/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PeopleRegister from './Components/PeopleRegister';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/people/register',
        element: <PeopleRegister />,
      },
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store = {appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
