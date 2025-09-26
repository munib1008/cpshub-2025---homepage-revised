import { ChevronDownIcon, LogInIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";

export const NavbarSection = () => {
  const navigationItems = [
    "About",
    "Projects",
    "Products",
    "Companies",
    "People",
    "Exclusive Services",
  ];

  return (
    <nav className="flex flex-col w-full items-center px-0 py-2.5 bg-white-bg border-b border-line">
      <div className="flex w-full max-w-[1440px] h-10 items-center justify-between px-[60px] py-0">
        <div className="flex items-center">
          <img
            className="w-[153px] h-8"
            alt="Original color CPS"
            src="https://c.animaapp.com/wBLQVuTq/img/original-color-cps-logo-4x-1@2x.png"
          />
        </div>

        <NavigationMenu className="flex items-center justify-center">
          <NavigationMenuList className="flex items-center gap-[5px]">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="inline-flex items-center justify-center gap-[5px] p-[5px] font-home-button font-[number:var(--home-button-font-weight)] text-[color:var(--body-text)] text-[length:var(--home-button-font-size)] tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] [font-style:var(--home-button-font-style)] hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <li className="flex items-center">
              <Separator orientation="vertical" className="h-[30px] bg-line" />
            </li>

            <NavigationMenuItem>
              <NavigationMenuLink className="inline-flex items-center justify-center gap-[5px] p-[5px] font-home-button font-[number:var(--home-button-font-weight)] text-[color:var(--body-text)] text-[length:var(--home-button-font-size)] tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] [font-style:var(--home-button-font-style)] hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-end gap-2.5">
          <Button
            variant="outline"
            className="h-10 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded border border-colors-component-general-border-color font-home-button font-[number:var(--home-button-font-weight)] text-[color:var(--body-text)] text-[length:var(--home-button-font-size)] tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] [font-style:var(--home-button-font-style)]"
          >
            <LogInIcon className="w-4 h-4" />
            Log in
          </Button>

          <Button className="h-10 p-2.5 inline-flex items-center justify-center gap-1.5 bg-primary-cta text-white-bg rounded font-home-button font-[number:var(--home-button-font-weight)] text-[length:var(--home-button-font-size)] tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] [font-style:var(--home-button-font-style)] hover:bg-primary-cta/90">
            Sign Up
          </Button>

          <Separator orientation="vertical" className="h-10 bg-line" />

          <Button
            variant="ghost"
            className="h-10 inline-flex items-center justify-center gap-2.5 p-[5px] border-b-2 border-grey-30 font-home-button font-[number:var(--home-button-font-weight)] text-[color:var(--body-text)] text-[length:var(--home-button-font-size)] tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] [font-style:var(--home-button-font-style)] hover:bg-transparent"
          >
            EN
            <ChevronDownIcon className="w-[7.4px] h-3" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
