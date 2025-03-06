import { lazy } from 'react'

const routers = [
    {
        path: '/',
        component: lazy(() => import('@pages/Home/Home'))
    },
    {
        path: '/login',
        component: lazy(() => import('@pages/Login/Login'))
    },
    {
        path: '/contact',
        component: lazy(() => import('@pages/Contact/Contact'))
    }
]
export default routers