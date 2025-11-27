"use client";
import { useTemplate } from "@/components/shared/template-context";
import templates from "./template-list";

export default function Template() {
  const { activeTemplate } = useTemplate();
  const currentTemplate = templates.find((t) => t.id === activeTemplate);

  return (
    <div className="flex min-h-screen w-full border border-dashed border-gray-300">
      {currentTemplate && (
        <div className="p-5 w-full">
          <h1 className="text-3xl font-bold mb-4">
            {currentTemplate.name}
          </h1>
          {currentTemplate.content}
        </div>
      )}
    </div>
  );
}