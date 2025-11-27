"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import templates from "@/app/constants/template";

interface SidebarProviderComponentProps {
  children?: React.ReactNode;
}

export default function SidebarProviderComponent({
  children,
}: SidebarProviderComponentProps) {
  const [activeTemplate, setActiveTemplate] = useState(templates[0].id);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar
          templates={templates}
          activeTemplate={activeTemplate}
          onTemplateSelect={setActiveTemplate}
        />
        <div className="mt-4 ml-4">
          <SidebarTrigger />
        </div>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
