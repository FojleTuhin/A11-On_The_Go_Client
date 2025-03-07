import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home.jsx';
import Error from './Page/Error.jsx';
import Root from './Page/Root.jsx';
import FirebaseProvider from './Firebase/FirebaseProvider.jsx';
import Login from './Page/Login.jsx';
import Register from './Page/Register.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ViewDetails from './Page/ViewDetails.jsx';
import AddBlog from './Page/AddBlog.jsx';
import AllBlogs from './Page/AllBlogs.jsx';
import Wishlist from './Page/Wishlist.jsx';
import Update from './Page/Update.jsx';
import Featured from './Page/Featured.jsx';
import PrivateRoute from './Page/PrivateRoute.jsx';
import ScroolMotion from './Component/ScroolMotion.jsx';

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:'/viewDetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://on-the-go-server.vercel.app/blogs/${params.id}`)
      },
      {
        path:'/addBlog',
        element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path:'/allBlogs',
        element:<AllBlogs></AllBlogs>
      },
      {
        path:'/wishlist',
        element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://on-the-go-server.vercel.app/blogs/${params.id}`)
      },
      {
        path:'/featuredBlogs',
        element:<Featured></Featured>
      },
      {
        path:'/motion',
        element:<ScroolMotion></ScroolMotion>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
