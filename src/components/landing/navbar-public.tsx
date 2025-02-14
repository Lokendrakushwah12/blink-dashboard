"use client";

import { cn } from "@/lib/utils";
import { Flower, Menu, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../layouts/theme-toggle";
import { Button } from "../ui/button";

const NavbarPublic = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const MENU_ITEMS = [
    { name: "Community", href: "/stories" },
    {
      name: "Features",
      href: "/features",
      subItems: [
        {
          name: "Feature 1",
          href: "/features/feature1",
          description: "Description of Feature 1",
        },
        {
          name: "Feature 2",
          href: "/features/feature2",
          description: "Description of Feature 2",
        },
        {
          name: "Feature 3",
          href: "/features/feature3",
          description: "Description of Feature 3",
        },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky inset-x-0 top-0 z-[100] transform bg-background/90 backdrop-blur-lg",
          isOpen ? "h-[calc(100%-24px)]" : "h-16",
        )}
      >
        <div className="container flex h-16 w-full items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-6 lg:flex-none">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold text-foreground"
              >
                <Flower strokeWidth={1.5} className="h-6 w-auto text-primary" />
                <span className="text-base font-medium">blink-dashboard</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 py-4">
            <ThemeToggle />
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="text-foreground">
                <span className="text-sm">Log in</span>
              </Button>
            </Link>
            {/* <Link href="/auth/join">
              <Button size="sm">
                <span className="text-sm">Join now</span>
              </Button>
            </Link> */}
            <Button
              className="lg:hidden"
              size="sm"
              variant="secondary"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <XIcon className="h-5 w-5 duration-300" />
              ) : (
                <Menu className="h-5 w-5 duration-300" />
              )}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarPublic;
