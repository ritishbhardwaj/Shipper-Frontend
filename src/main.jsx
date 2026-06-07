import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignupForm.jsx';
import Home from './components/Home.jsx';
import {RouterProvider , createBrowserRouter} from "react-router-dom";
import { homeAction } from './components/LoginForm.jsx';


const router = createBrowserRouter([
  { path: "/", element: <App /> , children:[
    {path :'/loginform' , element :<LoginForm/> , action:homeAction},
    {path :'/' , element :<Home/>},
    {path :'/signup' , element :<SignupForm/>}
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)