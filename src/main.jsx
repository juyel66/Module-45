import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import About from './About/About.jsx';
import Contact from './About/Contact/Contact.jsx';
import Users from './components/Header/Users/Users.jsx';
import PostData from './PostData.jsx';
import PostDetails from './PostDetails.jsx';


const router = createBrowserRouter([
 {
  path: '/',
  element: <Home></Home> ,
  children: [
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/post/:postId',
      loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
      element: <PostDetails></PostDetails>
    },
    {
      path: '/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
     },
     {
      path: '/post',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <PostData></PostData>
     },

    {
      path: '/contact',
      element: <Contact></Contact>
    }
  ],
 },
 {
  path: 'header',
  element: <Header></Header>
 },
 {
  path: '/about',
  element: <div>i am in the about page </div> 
 },

 {
  path: '/hello',
  element: <div>i am hello</div>
 },
 {
  path: '/juyel',
 element: <div>hello i am juyel Rana</div>
 }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)






















