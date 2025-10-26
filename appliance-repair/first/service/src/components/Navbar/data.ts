import type {JSX} from "react";
import React from "react";


//Icons Imports
import { House } from "lucide-react";
import { Phone } from "lucide-react";
import { Info } from "lucide-react";
// Create JSX obj
const HouseIcon = React.createElement(House);
const PhoneIcon = React.createElement(Phone);
const InfoIcon = React.createElement(Info);




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
      name: ['Home', 'الرئيسية'], 
      href: '/' ,
      icon: HouseIcon
    },
    { 
      id: 2, 
      name: ['Contact Us', 'اتصل بنا'],
      href: '/contact' ,
      icon: PhoneIcon
    },
    { 
      id: 3, 
      name: ['About Us', 'من نحن'],
      href: '/about' ,
      icon: InfoIcon
    }
  ];
