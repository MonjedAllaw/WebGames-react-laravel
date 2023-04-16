import {createBrowserRouter, Navigate} from 'react-router-dom';

import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Home from './views/Home';
import NotFound from './views/NotFound';
import About from './views/About';


const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children: [
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/',
                element:<Navigate to='/home'/>
            },
            {
                path:'/about',
                element:<About/>
            }
            
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children: [
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/',
                element:<Navigate to='/signup'/>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound/>
    }
])

export default router;
