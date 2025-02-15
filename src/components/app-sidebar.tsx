"use client";

import {
  DollarSign,
  Earth,
  Flower,
  LifeBuoy,
  MessageSquareWarning,
  PanelsLeftBottom,
  Send,
  Settings,
  Tickets,
  User2,
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
      title: "Overview",
      url: "/dashboard",
      icon: PanelsLeftBottom,
      items: [],
    },
    {
      title: "User",
      url: "/dashboard/user",
      icon: User2,
      items: [],
    },
    {
      title: "Revenue",
      url: "/dashboard/revenue",
      icon: DollarSign,
      items: [],
    },
    {
      title: "World",
      url: "/dashboard/world",
      icon: Earth,
      items: [
        // { title: "General", url: "/dashboard/settings/general" },
        // { title: "Team", url: "/dashboard/settings/team" },
        // { title: "Billing", url: "/dashboard/settings/billing" },
        // { title: "Limits", url: "/dashboard/settings/limits" },
      ],
    },
    {
      title: "Reports",
      url: "/dashboard/reports",
      icon: MessageSquareWarning,
      items: [],
    },
    {
      title: "Tickets",
      url: "/dashboard/tickets",
      icon: Tickets,
      items: [],
    },
  ],
  secondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [sideBarUser, setSideBarUser] = React.useState({
    name: "Lokendra",
    email: "Lokendrakushwah8051@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/118094744",
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
                  <span className="truncate font-semibold">
                    Blink Dashboard
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} currentPath={pathname} />
        <NavSecondary items={data.secondary} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={sideBarUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
