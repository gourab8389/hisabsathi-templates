"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import templates from "@/app/constants/template";
import { TemplateProvider, useTemplate } from "./template-context";

function SidebarContent({ children }: { children: React.ReactNode }) {
  const { activeTemplate, setActiveTemplate } = useTemplate();

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

export default function SidebarProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TemplateProvider>
      <SidebarContent>{children}</SidebarContent>
    </TemplateProvider>
  );
}