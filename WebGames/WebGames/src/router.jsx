import {createBrowserRouter, Navigate} from 'react-router-dom';

import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Home from './views/Home';
import NotFound from './views/NotFound';
import About from './views/About';
import Welcome from './views/Welcome';
import XO from './views/xo/XO.jsx'
import Matching from './views/matching/Matching';
import RPS from './views/rps/RPS';

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
            },
            {
                path:'/xo',
                element:<XO/>
            },
            {
                path:'/rps',
                element:<RPS/>
            },
            {
                path:'/matching',
                element:<Matching/>
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
                path:'/welcome',
                element:<Welcome/>
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
