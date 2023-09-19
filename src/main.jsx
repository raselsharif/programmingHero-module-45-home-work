import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import All from './components/All/All.jsx';
import AllDetails from './components/AllDetails/AllDetails.jsx';
import HomeMeals from './components/HomeMeals/HomeMeals.jsx';
import Catagories from './components/Catagoties/Catagories.jsx';
import HomeMealDetails from './components/HomeMealDetails/HomeMealDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'),
        element: <HomeMeals></HomeMeals>

      },
      {
        path: '/homeMealDetails/:homeId',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.homeId}`),
        element: <HomeMealDetails />

      },
      {
        path: '/all',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element: <All></All>,
      },
      {
        path: '/details/:detailsID',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.detailsID}`),
        element: <AllDetails />,
      },
      {
        path: '/catagories',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Catagories />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
