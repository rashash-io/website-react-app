import React from "react";
//Social Media
import {
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
  FaFileCircleQuestion,
} from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
// Create JSX obj
const FaYoutubeIcon = React.createElement(FaYoutube);
const FaTiktokIcon = React.createElement(FaTiktok);
const FaLinkedinIcon = React.createElement(FaLinkedin);
const FaXTwitterIcon = React.createElement(FaXTwitter);
const FaFacebookIcon = React.createElement(FaFacebook);
const FaInstagramIcon = React.createElement(FaInstagram);
const FaFileCircleQuestionIcon = React.createElement(FaFileCircleQuestion);

export const socialMedia = [
  {
    name: "Facebook",
    href: "/PanasonicMEA/",
    icon: FaFacebookIcon,
    color: "#4267B2",
  },
  {
    name: "TikTok",
    href: "/@panasonicmea",
    icon: FaTiktokIcon,
    color: "#34eb55",
  },
  {
    name: "Instagram",
    href: "/panasonic_mea",
    icon: FaInstagramIcon,
    color: "#FF0000",
  },
  {
    name: "X",
    href: "/Panasonic_MEA",
    icon: FaXTwitterIcon,
  },
  {
    name: "LinkedIn",
    href: "/company/panasonic-middle-east-&-africa",
    icon: FaLinkedinIcon,
    color: "#0E76A8",
  },
  {
    name: "Youtube",
    href: "/@PanasonicMiddleEast",
    icon: FaYoutubeIcon,
    color: "#FF0000",
  },
];

// Phone Numbers
export const phoneNumbers = [
  {
    id: 0,
    loc: ["Nasr City", "مدينة نصر"],
    number: "01556919697",
  },
  {
    id: 1,
    loc: ["Down Town", "وسط البلد"],
    number: "01064911130",
  },
  {
    id: 2,
    loc: ["New Cairo", "القاهرة الجديدة"],
    number: "01211944020",
  },
  {
    id: 3,
    loc: ["5th Settlement", "التجمع الخامس"],
    number: "01094976255",
  },
  {
    id: 4,
    loc: ["6th of October", "6 اكتوبر"],
    number: "01556919697",
  },
  {
    id: 5,
    loc: ["Mohandessein", "المهندسين"],
    number: "01556919697",
  },
  {
    id: 6,
    loc: ["Dokki", "الدقي"],
    number: "01094976255",
  },
  {
    id: 7,
    loc: ["Nasr City", "مدينة نصر"],
    number: "01556919697",
  },
  {
    id: 8,
    loc: ["Haram", "الهرم"],
    number: "01064911130",
  },
  {
    id: 9,
    loc: ["Qena", "قنا"],
    number: "01555809807",
  },
  {
    id: 10,
    loc: ["Mansoura", "المنصورة"],
    number: "01211944020",
  },
  {
    id: 11,
    loc: ["Alexandria", "الاسكندرية"],
    number: "01555809807",
  },
];

//Navigation
import type { JSX } from "react";

//Icons Imports
import { TbContract, TbPhone, TbHome, TbInfoCircle } from "react-icons/tb";
// Create JSX obj
const TbHomeIcon = React.createElement(TbHome);
const TbPhoneIcon = React.createElement(TbPhone);
const TbInfoCircleIcon = React.createElement(TbInfoCircle);
const TbContractIcon = React.createElement(TbContract);

//////Navigation Pages Page List
export type NavPagesListType = {
  id: number;
  name: string[];
  href: string;
  icon?: JSX.Element;
}[];

export const navPagesList: NavPagesListType = [
  {
    id: 0,
    name: ["Home", "الرئيسية"],
    href: "/",
    icon: TbHomeIcon,
  },
  {
    id: 1,
    name: ["Contact Us", "اتصل بنا"],
    href: "/contact",
    icon: TbPhoneIcon,
  },
  {
    id: 2,
    name: ["About Us", "من نحن"],
    href: "/about",
    icon: TbInfoCircleIcon,
  },
  {
    id: 3,
    name: ["Terms & Conditions", "الشروط و الاحكام"],
    href: "/tos",
    icon: TbContractIcon,
  },
  {
    id: 4,
    name: ["F.A.Q.", "الأسئلة المتداولة"],
    href: "/faq",
    icon: FaFileCircleQuestionIcon,
  },
];
