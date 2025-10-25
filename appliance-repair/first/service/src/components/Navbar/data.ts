import type {JSX} from "react";


//////Navigation Pages Page List
export type NavPagesListType = {
    id: number,
    name: string[],
    href: string,
    icon?: JSX.Element
}[]
 
 export const navPagesList : NavPagesListType = [
    { 
      id: 1, 
      name: ['Home', ''], 
      href: '/' 
    },
    { 
      id: 2, 
      name: ['Contact Us', ''],
      href: '/contact' 
    },
    { 
      id: 3, 
      name: ['About Us', ''],
      href: '/about' 
    }
  ];
