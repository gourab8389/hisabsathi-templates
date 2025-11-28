"use client";
import { useRef } from "react";
import { useTemplate } from "@/components/shared/template-context";
import templates from "./template-list";
import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";

export default function Template() {
  const { activeTemplate } = useTemplate();
  const currentTemplate = templates.find((t) => t.id === activeTemplate);
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `${currentTemplate?.name || "invoice"}_${Date.now()}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
  });

  return (
    <div className="flex min-h-screen w-full border border-dashed border-gray-300">
      {currentTemplate && (
        <div className="p-5 w-full">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold mb-4">{currentTemplate.name}</h1>
            <Button onClick={handlePrint}>Download PDF</Button>
          </div>
          <div className="border border-gray-200">
            <div ref={contentRef}>{currentTemplate.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
