"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@heroui/react";
import {
  AcmeLogo,
  SearchIcon,
  SunFilledIcon,
  MoonFilledIcon,
} from "../components/icons.tsx";
import { ThemeSwitch } from "../components/ThemeSwitcher.tsx";

export default function App() {
  return (
    <Navbar shouldHideOnScroll className=" p-5 justify-between items-center ">
      <NavbarBrand>
        <Link className="flex">
          <AcmeLogo />
          <p className="font-bold">MouseMaster.gg</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/gaming-devices/">
            Gaming Devices
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/psa-calculator/">
            PSA Calculator
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/shape-comparison/">
            Shape Comparison
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Logout</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
