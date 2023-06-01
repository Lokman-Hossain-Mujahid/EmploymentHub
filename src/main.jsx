import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Stats from './components/Stats/Stats';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomeDetails></HomeDetails>,
      },
      {
        path: "/jobs/:jobsid",
        element: <JobDetails />,
        loader: ({params}) => fetch(`/${params.jobsid}.json`)
      }
      ,
      {
        path:'stats',
        element: <Stats></Stats>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
