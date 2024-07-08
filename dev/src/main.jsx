import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './Layout'
import { sidebar_routes } from './config/sidebar';
import { project_routes } from './config/projects';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [ 
      ...sidebar_routes,
      ...project_routes,
    ], 
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
