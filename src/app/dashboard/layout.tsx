"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const pageTitle = pathname?.split("/")[2] || "Dashboard";

  return (
    <SidebarProvider>
      <div className="flex">
        {/* Sidebar */}
        <AppSidebar className="w-64 bg-background" />

        <SidebarInset className="flex w-screen flex-1 flex-col md:w-[calc(100vw-265px)]">
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex w-full items-center justify-between">
              <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
              {/* <ThemeToggle /> */}
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 py-6">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
