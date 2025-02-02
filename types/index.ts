import {ReactNode} from 'react'

export interface NavItem {
    name : string,
    route? : string,
    icon: string 

}

export interface TabProps {
    className?: string,
    navItem: NavItem
}

export interface PageContentProps {
    children: ReactNode;
    className?: string;
  }
  

  export interface GithubUser {
    name? : string,
    bio? : string,
    url? : string ,
    login?: string ,
    avatar_url? : string ,
    html_url?: string ,
    twitter_username?: string

  }
export interface KPICARD { 
    title: string; 
    value: string | number ;
    icon : string , 
    view : string;
}
  