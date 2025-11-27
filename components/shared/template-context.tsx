"use client";

import { createContext, useContext, useState } from "react";
import templates from "@/app/_components/template-list";

const TemplateContext = createContext<{
  activeTemplate: string;
  setActiveTemplate: (id: string) => void;
}>({
  activeTemplate: templates[0].id,
  setActiveTemplate: () => {},
});

export const useTemplate = () => useContext(TemplateContext);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [activeTemplate, setActiveTemplate] = useState(templates[0].id);

  return (
    <TemplateContext.Provider value={{ activeTemplate, setActiveTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
}