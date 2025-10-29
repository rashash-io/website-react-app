import { Button } from "@/components/ui/button";
import { navPagesList } from "@/lib/data";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/Navbar/theme-toggle";
import { Separator } from "@/components/ui/separator";

import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";

export function HamburgerNavbar() {
  const { rtlVal } = useLanguage();


  return (
    <nav dir={rtlVal} className="border-b-3  w-full mb-1  border-gray-700 p-4">
      <div className="grid-cols-6 grid">
        {/* LEFT */}
        <div className=" justify-self-start place-self-center">
          <div className=" flex items-center  ">
            <SheetToggle />
            <span className="mx-2"> {rtlVal ? "القائمة" : "Menu"} </span>
          </div>
        </div>
        {/* CENTER */}
        <div className="w-full  items-center flex flex-col justify-center col-span-4">
          <span className="font-extrabold text-2xl md:text-4xl">Panasonic</span>
       
        </div>
        {/* RIGHT */}
        <div className="  items-center place-self-center justify-self-end ">
          <ThemeToggle />
        </div>
      </div>
    </nav>
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
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="my-3" />
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
