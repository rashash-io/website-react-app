import { Button } from "@/components/ui/button";
import { navPagesList } from "./data";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Separator } from "@/components/ui/separator";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";

// Languge CONTEXT HERE

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
        <div className="w-full  items-center flex justify-center col-span-4">
          PAGE NAME CURRENT
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
        <li className="" key={item.id}>
          <a href={item.href} className="h-10 flex items-center  space-x-4">
            <span className="">{item.icon}</span>
            <span className="h-3/4">
              <Separator orientation="vertical" />
            </span>
            <span>{item.name[rtlVal ? 1 : 0]}</span>
          </a>
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
          <ButtonIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {/* <div dir={textDirection}>
                {textDirection ? "القائمة" : "Menu"}
              </div> */}
              {rtlVal ? "القائمة" : "Menu"}
            </SheetTitle>
            <SheetDescription>
              <span className="justify-self-center">Pages</span>
              <MapNavList />
              <div dir={rtlVal}>
                <button onClick={()=> setLanguage(rtlVal ? "en" : "ar")}>
                  aaaaaaa
                  {rtlVal
                    ? "Switch language to English 🇺🇸"
                    : "حول اللغة للعربية 🇪🇬"
                    }
                </button>
               
              </div>
         
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
