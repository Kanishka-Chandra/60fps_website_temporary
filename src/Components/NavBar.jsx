import React from "react";
import { logo, contactUsButton } from "../data";
import DrawOutlineButton from "./NavBarComponents/DrawOutlineButton";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 flex h-[15%] w-full flex-row justify-between">
      <div className="flex h-full w-full items-center p-1">
        <div className="aspect-square h-20 justify-start md:h-full">
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-end p-1">
        <DrawOutlineButton href={contactUsButton.href}>
          {contactUsButton.text}
        </DrawOutlineButton>
      </div>
    </nav>
  );
};

export default NavBar;
