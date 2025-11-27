import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, FileText } from "lucide-react";
import { JSX } from "react";

interface AppSidebarProps {
  templates: Array<{ id: string; name: string; content: string | JSX.Element }>;
  activeTemplate: string;
  onTemplateSelect: (id: string) => void;
}

export function AppSidebar({
  templates,
  activeTemplate,
  onTemplateSelect,
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <Book className="my-4 mx-2 h-6 w-6" />
        <SidebarMenu>
          {templates.map((template) => (
            <SidebarMenuItem key={template.id}>
              <SidebarMenuButton
                onClick={() => onTemplateSelect(template.id)}
                isActive={activeTemplate === template.id}
                tooltip={template.name}
              >
                <FileText className="h-4 w-4" />
                <span>{template.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
