import React from "react";
import BubbleText from "./FooterComponents/LogoText";
import { footerLinks, footerSocialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="max-h-[30%] w-full px-2 py-4 text-black">
      <div className="flex h-full w-full flex-col items-center">
        <div className="grid w-full grid-cols-5">
          <div className="col-span-1 p-1">
            <BubbleText text={"60fps Studio"} />
          </div>
          <div className="col-span-3 mx-3 flex flex-wrap items-center justify-center md:justify-evenly">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mx-1 text-xl font-medium capitalize"
              >
                {link.LinkName}
              </a>
            ))}
          </div>
          <div className="col-span-1 flex flex-wrap items-center justify-evenly px-3">
            {footerSocialLinks.map((socialLink, index) => (
              <a key={index} href={socialLink.href}>
                <img
                  src={socialLink.icon}
                  alt={socialLink.iconAlt}
                  className="size-[30px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="m-2 font-medium md:m-5">
        © 60fps.co.in. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
