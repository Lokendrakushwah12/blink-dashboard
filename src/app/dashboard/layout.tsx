"use client";

import { useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Track sidebar state

  const pageTitle = pathname?.split("/")[2] || "Dashboard";

  return (
    <SidebarProvider>
      <div className="flex">
        {/* Sidebar */}
        <AppSidebar
          className={`bg-background transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-0 md:w-0"
          }`}
        />

        {/* Main Content */}
        <SidebarInset
          className={`flex flex-1 flex-col w-screen transition-all duration-300 ${
            isSidebarOpen ? "md:w-[calc(100vw-265px)]" : ""
          }`}
        >
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <button
              className="-ml-1"
              onClick={() => setIsSidebarOpen((prev) => !prev)} // Toggle sidebar
            >
              <SidebarTrigger />
            </button>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex w-full items-center justify-between">
              <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 py-2 overflow-y-auto">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
