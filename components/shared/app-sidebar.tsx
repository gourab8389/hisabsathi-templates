import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FileText } from "lucide-react";

interface AppSidebarProps {
  templates: Array<{ id: string; name: string; category: string }>;
  activeTemplate: string;
  onTemplateSelect: (id: string) => void;
}

export function AppSidebar({ templates, activeTemplate, onTemplateSelect }: AppSidebarProps) {
  // Group templates by category
  const groupedTemplates = templates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  }, {} as Record<string, typeof templates>);

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {Object.entries(groupedTemplates).map(([category, items]) => (
          <SidebarGroup key={category}>
            <SidebarGroupLabel>{category}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((template) => (
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
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}