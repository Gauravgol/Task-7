import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Users from'./Components/Users.jsx'
import TaskList from'./Components/TaskList.jsx'
import Task from'./Components/Task.jsx'

 
 
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/user",
    element: <Users/>,
  },
  {
    path: "/taskLi",
    element: <TaskList/>,
  },
  {
    path: "/ta",
    element: <Task/>,
  },
   
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
