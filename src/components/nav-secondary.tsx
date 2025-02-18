"use client";
import * as React from "react";
import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAnimation } from "motion/react";

export function NavSecondary({
  items,
  currentPath,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
  currentPath: string;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const isActive = (url: string) => url === currentPath;
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const controls = useAnimation();

            const handleMouseEnter = React.useCallback(() => {
              controls.start("animate");
            }, [controls]);

            const handleMouseLeave = React.useCallback(() => {
              controls.start("normal");
            }, [controls]);
            return (
              <SidebarMenuItem
                className={isActive(item.url) ? "rounded-md bg-muted" : ""}
                key={item.title}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <SidebarMenuButton asChild size="default">
                  <a href={item.url} className="hover:bg-muted/40">
                    <item.icon controls={controls} />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
