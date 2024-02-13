import React from 'react'
import { useRoutes } from 'react-router'
import Layout from '../Layout/Layout'
import Home from '../../Pages/Home/Home'
import ContactPg from '../../Pages/Contact/ContactPg'
import Community from '../../Pages/Community/Community'

const Routers = () => {
 let MyRouter = useRoutes(
    [
        {
            path: '/',
            element : <Layout/>,
            children : [
                {
                    element: <Home/>,
                    index : true,
                },

                {
                    element: <Home/>,
                    path: '/contact',
                },
                {
                    element: <Home/>,
                    path: '/about',
                },
            ]
        }
    ]
        
    
 )
 return MyRouter;
}

export default Routers