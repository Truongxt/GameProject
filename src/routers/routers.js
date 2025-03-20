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
        path: '/user_profile',
        component: lazy(() => import('@pages/Information/UserProfile'))
    },
    {
        path: '/sidebarmenu',
        component: lazy(() => import('@pages/Information/SidebarMenu'))
    },
    {
        path: '/orderhistory',
        component: lazy(() => import('@pages/Information/OrderHistory'))
    },
    {
        path: '/paymenthistory',
        component: lazy(() => import('@pages/Information/PaymentHistory'))
    },
    {
        path: '/contact',
        component: lazy(() => import('@pages/Contact/Contact'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/Cart/Cart'))
    },
    {
        path: '/game-steam',
        component: lazy(() => import('@pages/GameSteam/GameSteam'))
    },
    {
        path: '/steamwallet',
        component: lazy(() => import('@pages/SteamWallet/SteamWallet'))
    }
]
export default routers;