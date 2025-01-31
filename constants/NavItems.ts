import { NavItem } from "@/types"
export const NavItems : NavItem[] = [
    {
        name : 'Home',
        icon : '/Home.svg' ,
        route : '/dashboard'
    },
    {
        name : 'Sales',
        icon : '/sales.svg' ,
        route : '/dashboard/sales'
    },
    {
        name : 'Analytics',
        icon : '/analy.svg' ,
        route : '/dashboard/analytics'
    },
    {
        name : 'Orders',
        icon : '/orders.svg' ,
        route : '/dashboard/orders'
    }
]