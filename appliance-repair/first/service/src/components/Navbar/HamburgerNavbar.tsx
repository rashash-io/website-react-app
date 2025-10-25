import { Button } from "@/components/ui/button";
import type { NavPagesListType } from "./data";
import { navPagesList } from "./data";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function HamburgerNavbar() {

  return (
    <nav className="border-b-3  w-full mb-1  border-gray-700 p-4">
      <div className="grid-cols-6 grid">

        {/* LEFT */}
        <div className=" justify-self-start place-self-center">
         
          <div className=" flex items-center  ">
            <SheetToggle />
            <span className="mx-2">Menu </span>
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
function MapNavList(){
  return (
    <ul>
      {navPagesList.map((item) => (
        <li key={item.id}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export function ButtonIcon() {
  return (
    <Button variant="secondary" >
      <Menu className="my-3" />
    </Button>
  );
}

function SheetToggle() {
  return (
    <Sheet>
      <SheetTrigger>
        <ButtonIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            <MapNavList/>
            hhhhhhhhh
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
