import {ReactNode} from 'react'

export interface NavItem {
    name : string,
    route : string,
    icon: string;  
}

export interface TabProps {
    className?: string;
    navItem: NavItem;
}

export interface PageContentProps {
    children: ReactNode;
    className?: string;
  }
  