import { Button } from "@/components/ui/button";
import { navPagesList } from "@/lib/data";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components";
import { Separator } from "@/components/ui/separator";

import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { Link } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";
import type { JSX } from "react";

export function Navbar() {
  const { rtlVal } = useLanguage();

  return (
    <nav
      dir={rtlVal}
      className="border-b-3 transition-all duration-1000 ease-in-out  h-18 sticky top-0 z-50 bg-slate-900/50 backdrop-blur-sm border-gray-700 shadow-md shadow-primary/20 "
    >
      <div className="mx-auto grid grid-cols-6 h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <span className="font-extrabold text-2xl md:text-4xl gap-3 hover:text-primary transition-all duration-500 ease-in-out ">
            Panasonic
          </span>
        </Link>
        {/* Nav LINKS*/}
        <div className=" col-span-4 place-self-center backdrop-blur-lg py-1 rounded-xl  shadow-md shadow-primary/20">
          <MapNavListInNav />
        </div>
        {/* THEME TOGGLE */}
        <div className="  items-center place-self-center justify-self-end flex ">
          <ThemeToggle />
          <span className="mx-2 text-secondary">|</span>
          <LanguageToggle />
          <SheetToggle />
        </div>
      </div>
    </nav>
  );
}
function MapNavListInNav() {
  const { rtlVal } = useLanguage();
  return (
    <ul dir={rtlVal} className="max-md:hidden flex">
      {navPagesList.map((item) => (
        <li className="mx-2" key={item.id}>
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              twMerge(
                "group w-fit   hover:text-primary transition-all duration-700 ease-in-out   py-1 items-center text-lg flex gap-1 ",
                isActive &&
                  "text-primary transition-all duration-700 ease-in-out  "
              )
            }
          >
            <span className="text-base! bg-slate-800 p-2 rounded-full transition-all duration-700 ease-in-out ">
              {item?.icon}
            </span>

            {item.name[rtlVal ? 1 : 0]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function MapNavList() {
  const { rtlVal } = useLanguage();
  return (
    <ul dir={rtlVal}>
      {navPagesList.map((item) => (
        <li className="mx-1" key={item.id}>
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              twMerge(
                "group w-fit   hover:text-primary transition-all duration-700 ease-in-out  border-0 border-transparent border-b-3 py-1 hover:border-b-primary/50 items-center text-lg flex m-1",
                isActive &&
                  "text-primary transition-all duration-700 ease-in-out  font-bold"
              )
            }
          >
            <span className="text-xl bg-slate-800 p-2 rounded-full border-2  transition-all duration-700 ease-in-out group-hover:border-primary">
              {item?.icon}
            </span>
            <span className="h-5 m-2">
              <Separator
                orientation="vertical"
                className="text-primary transition-all duration-700 ease-in-out group-hover:bg-primary/50"
              />
            </span>

            {item.name[rtlVal ? 1 : 0]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export function ButtonIcon() {
  return (
    <Button variant="secondary">
      <Menu className="my-3" />
    </Button>
  );
}

function SheetToggle() {
  const { rtlVal, setLanguage } = useLanguage();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="flex">
          <span className="mx-2 "> {rtlVal ? "القائمة" : "Menu"} </span>
          <Menu className="" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{rtlVal ? "القائمة" : "Menu"}</SheetTitle>
            <SheetDescription className="">
              <div className="flex flex-col my-2">
                <div className=" w-fit justify-center place-self-center  my-2 text-primary">
                  {rtlVal ? "الصفحات" : "Pages"}
                  <Separator className="bg-primary/50" />
                </div>
              </div>
              <MapNavList />

              {/* LANGUAGE CTRL */}
              <div
                dir={rtlVal}
                className="flex  border items-center justify-center  border-primary/50 rounded-lg p-2 "
              >
                <Button
                  variant={"link"}
                  className="mx-1 p-0"
                  onClick={() => setLanguage(rtlVal ? "en" : "ar")}
                >
                  {rtlVal ? "English 🇺🇸" : "🇪🇬 للعربية"}
                </Button>
                {rtlVal ? "Switch language to" : "حول اللغة"}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const LanguageToggle = (): JSX.Element => {
  const { rtlVal, setLanguage } = useLanguage();
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setLanguage(rtlVal ? "en" : "ar")}
      >
        <span className="h-[1.2rem] w-[1.2rem] scale-100  transition-all">
          {rtlVal ? "🇺🇸" : "🇪🇬"}
        </span>
      </Button>
    </>
  );
};
