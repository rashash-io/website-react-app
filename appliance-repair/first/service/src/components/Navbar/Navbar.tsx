import React, { memo } from "react";
// import { FullNavbar } from "./FullNavbar";
import { HamburgerNavbar } from "./HamburgerNavbar";


////////
const Navbar = () => {
  return (
    <>
   
        
        <HamburgerNavbar />
   

      {/* <FullNavbar {...navPagesList}/> */}
    </>
  );
};

export default memo(Navbar);
