import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogOut, Layout, Building2, Pencil, RefreshCcw, Settings2 } from "lucide-react";

export default function SettingsSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="max-w-sm w-full p-0">
        <div className="h-full flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b">
            <SheetHeader>
              <div className="flex items-center gap-3">
                <div className="bg-[var(--theme-primary)]/10 rounded-full p-2">
                  <Settings2 className="w-6 h-6 text-[var(--theme-primary)]" />
                </div>
                <div>
                  <SheetTitle className="text-lg font-semibold">Settings</SheetTitle>
                  <SheetDescription className="text-xs mt-1">
                    System configuration
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>
          </div>

          {/* Main Menu */}
          <div className="flex-1 p-6 flex flex-col gap-3">
            {/* Navigation Layout */}
            <div className="rounded-xl border bg-muted/50 flex items-center gap-3 p-3 cursor-pointer hover:shadow transition group">
              <div className="bg-[var(--theme-primary)]/10 rounded-lg p-2">
                <Layout className="w-5 h-5 text-[var(--theme-primary)]" />
              </div>
              <div>
                <div className="font-medium">Navigation Layout</div>
                <div className="text-xs text-muted-foreground">Top navigation bar <span className="font-semibold text-[var(--theme-primary)]">Top</span></div>
              </div>
            </div>
            {/* App Settings List */}
            <div className="flex flex-col gap-2 mt-2">
              <SidebarSetting
                icon={<Building2 className="w-5 h-5 text-[var(--theme-primary)]" />}
                title="Initial Company Setup"
                description="Configure company information and settings"
              />
              <SidebarSetting
                icon={<Pencil className="w-5 h-5 text-[var(--theme-primary)]" />}
                title="Change Company Parameters"
                description="Modify existing company configuration"
              />
              <SidebarSetting
                icon={<RefreshCcw className="w-5 h-5 text-[var(--theme-primary)]" />}
                title="Regulation Refresh Parameters"
                description="Update regulatory compliance settings"
              />
              <SidebarSetting
                icon={<Settings2 className="w-5 h-5 text-[var(--theme-primary)]" />}
                title="Assessment Parameters (LLM etc.)"
                description="Configure AI and assessment settings"
              />
            </div>
          </div>

          {/* Sign Out */}
          <div className="p-6 border-t">
            <Button
              variant="outline"
              className="w-full border-2 border-red-100 text-red-600 bg-red-50 hover:bg-red-100 hover:border-red-300 flex gap-2 py-6 font-medium text-base rounded-xl"
              onClick={() => alert("Sign Out clicked!")}
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </Button>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              Settings are automatically saved
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SidebarSetting({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <button className="w-full text-left flex gap-3 items-start bg-white hover:bg-muted/70 transition rounded-xl p-3 border group">
      <div className="bg-[var(--theme-primary)]/10 rounded-lg p-2">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </button>
  );
}
