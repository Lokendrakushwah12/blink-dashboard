"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useState } from "react";

export function NavMain({
  items,
  currentPath,
}: {
  items: {
    title: string;
    url: string;
    icon: React.ElementType;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  currentPath: string;
}) {
  const isActive = (url: string) => {
    if (url === "/dashboard" && currentPath === "/dashboard") {
      return true;
    }
    if (url === "/dashboard/user" && currentPath === "/dashboard/user") {
      return true;
    }
    if (url === "/dashboard/revenue" && currentPath === "/dashboard/revenue") {
      return true;
    }
    if (url === "/dashboard/world" && currentPath === "/dashboard/world") {
      return true;
    }
    if (
      url === "/dashboard/settings" &&
      currentPath === "/dashboard/settings"
    ) {
      return true;
    }
    if (url === "/dashboard/reports" && currentPath === "/dashboard/reports") {
      return true;
    }
    if (url === "/dashboard/tickets" && currentPath === "/dashboard/tickets") {
      return true;
    }

    // For nested or sub-routes (e.g., /dashboard/settings)
    if (url.startsWith("/dashboard") && currentPath.startsWith(url)) {
      return false; // Don't highlight top-level item when on a nested route
    }

    return currentPath.startsWith(url);
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={isActive(item.url)}
          >
            <SidebarMenuItem
              className={`rounded-md ${
                isActive(item.url)
                  ? "bg-muted text-foreground dark:bg-muted"
                  : ""
              }`}
            >
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link href={item.url} className="flex items-center">
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem
                          key={subItem.title}
                          className={`rounded-lg ${
                            isActive(subItem.url)
                              ? "bg-muted-foreground text-foreground dark:bg-muted"
                              : "hover:bg-muted dark:hover:bg-muted/40"
                          }`}
                        >
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
