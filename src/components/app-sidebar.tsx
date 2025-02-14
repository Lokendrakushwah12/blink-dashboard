"use client";

import {
  Bitcoin,
  Flower,
  LifeBuoy,
  Send,
  Settings2,
  Telescope,
  Wallet,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Bitcoin,
      items: [],
    },
    {
      title: "Explore",
      url: "/dashboard/explore",
      icon: Telescope,
      items: [],
    },
    {
      title: "Wallet",
      url: "/dashboard/wallet",
      icon: Wallet,
      items: [],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        // { title: "General", url: "/dashboard/settings/general" },
        // { title: "Team", url: "/dashboard/settings/team" },
        // { title: "Billing", url: "/dashboard/settings/billing" },
        // { title: "Limits", url: "/dashboard/settings/limits" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Feedback", url: "#", icon: Send },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [sideBarUser, setSideBarUser] = React.useState({
    name: "",
    email: "",
    avatar: "",
  });

  const pathname = usePathname();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="hover:bg-muted/40">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                  <Flower strokeWidth={1.5} className="h-6 w-auto text-white" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Blink Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation Items */}
        <NavMain items={data.navMain} currentPath={pathname} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={sideBarUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
