"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import templates from "./constants/template";


export default function Home() {

  const currentTemplate = templates.find((t) => t.id === activeTemplate);

  return (
    <div className="flex min-h-screen w-full">
        {currentTemplate && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>{currentTemplate.name}</CardTitle>
              <CardDescription>
                Content for {currentTemplate.name} will be designed here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">
                  Template content for {currentTemplate.name} goes here
                </p>
              </div>
            </CardContent>
          </Card>
        )}
    </div>
  );
}