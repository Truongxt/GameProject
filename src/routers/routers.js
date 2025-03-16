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
        path: '/register',
        component: lazy(() => import('@pages/Login/Register'))
    },
    {
        path: '/forgot-password',
        component: lazy(() => import('@pages/Login/ForgotPassword'))
    },
    {
        path: '/contact',
        component: lazy(() => import('@pages/Contact/Contact'))
    },
    {
        path: '/steamwallet',
        component: lazy(() => import('@pages/SteamWallet/SteamWallet'))
    }
]
export default routers;