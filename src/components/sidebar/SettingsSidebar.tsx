// import React from 'react';
import { X, Settings, Building2, Edit3, RefreshCw, Brain, User, Palette, LogOut, Layout, Users, Menu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store/store';
import { setIsOpenSidebar } from '@/features/companies/companiesSlice';
import { useNavigate } from 'react-router-dom';



export function SettingsSidebar() {
  const dispatch = useDispatch<AppDispatch>();

     const { isOpenSidebar} = useSelector((state: RootState) => state.companies);
 const handleSidebarOpen=()=>{
 
 dispatch(setIsOpenSidebar(false))
 }

 const navigate = useNavigate();

  const settings = [
    { id: 'initial-company-setup', icon: Building2, label: 'Initial Company Setup', description: 'Configure company information and settings', path:'initialCompanySetup'},
    { id: 'change-company-parameters', icon: Edit3, label: 'Change Company Parameters', description: 'Modify existing company configuration',path:'initialCompanySetup' },
    { id: 'regulation-refresh-parameters', icon: RefreshCw, label: 'Regulation Refresh Parameters', description: 'Update regulatory compliance settings',path:'initialCompanySetup' },
    { id: 'assessment-parameters', icon: Brain, label: 'Assessment Parameters (LLM etc.)', description: 'Configure AI and assessment settings',path:'initialCompanySetup' },
    { id: 'user-management', icon: Users, label: 'User & Role Management', description: 'Manage users, roles, and permissions',path:'userRoleManagement' },
    { id: 'menu-management', icon: Menu, label: 'Menu Management', description: 'Configure navigation menus and access',path:'initialCompanySetup' },
    { id: 'user-profile', icon: User, label: 'User Profile', description: 'Manage your personal profile settings',path:'initialCompanySetup' },
    { id: 'colour-palette', icon: Palette, label: 'Colour Palette', description: 'Customize application theme and colors',path:'initialCompanySetup' },
  ];
 const handleSettingClick = (settingId: string, path:string) => {
   
    navigate(`/${path}`); // Navigate to the specific setting page
    dispatch(setIsOpenSidebar(false)); // Always close settings sidebar when navigating
  };
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in-scale"
       
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 bottom-0 w-80 bg-[var(--theme-card)] border-l border-[var(--theme-border)] shadow-2xl z-50 transition-all duration-500 ease-out ${
        isOpenSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[var(--theme-card)] border-b border-[var(--theme-border)] z-10">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-primary)] rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="font-['Cairo:Bold',_sans-serif] text-[var(--theme-foreground)] text-lg">
                    Settings
                  </h2>
                  <p className="font-['Cairo:Regular',_sans-serif] text-[var(--theme-muted-foreground)] text-sm">
                    System configuration
                  </p>
                </div>
              </div>
              <Button
               onClick={handleSidebarOpen}
                size="sm"
                style={{ backgroundColor: "#fff" }}
                className="hover-scale btn-press transition-all duration-300 text-black"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Layout Toggle */}
          {(
            <div className="p-6 border-b border-[var(--theme-border)]">
              <Card className="border-[var(--theme-border)] bg-[var(--theme-secondary)]/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--theme-primary)] rounded-lg flex items-center justify-center">
                        <Layout className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-['Cairo:SemiBold',_sans-serif] text-[var(--theme-foreground)] text-sm mb-1">
                          Navigation Layout
                        </div>
                        <p className="font-['Cairo:Regular',_sans-serif] text-[var(--theme-muted-foreground)] text-xs">
                        
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cairo:Regular',_sans-serif] text-[var(--theme-muted-foreground)] text-xs">
                      
                      </span>
                      <Switch
                        // checked={navigationMode === 'sidebar'}
                        // onCheckedChange={handleNavigationToggle}
                        // className="data-[state=checked]:bg-[var(--theme-primary)]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings Content */}
          <div className="p-6 space-y-3">
            <h3 className="font-['Cairo:SemiBold',_sans-serif] text-[var(--theme-foreground)] text-sm mb-4">
              Application Settings
            </h3>
            
            {settings.map((setting, index) => (
              <Card 
                key={setting.id}
                className="cursor-pointer transition-all duration-300 hover-lift hover:shadow-md hover:bg-[var(--theme-secondary)]/50 border-[var(--theme-border)] animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleSettingClick(setting.id, setting.path)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--theme-secondary)] rounded-lg flex items-center justify-center">
                      <setting.icon className="w-4 h-4 text-[var(--theme-primary)]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-['Cairo:SemiBold',_sans-serif] text-[var(--theme-foreground)] text-sm mb-1">
                        {setting.label}
                      </div>
                      <p className="font-['Cairo:Regular',_sans-serif] text-[var(--theme-muted-foreground)] text-xs">
                        {setting.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Logout Section */}
          <div className="sticky bottom-0 bg-[var(--theme-card)] border-t border-[var(--theme-border)] p-6">
            <Separator className="mb-4" />
            <Card className="border-red-200 bg-red-50/50 hover:bg-red-50 transition-all duration-300 hover-lift cursor-pointer">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                 
                  className="w-full flex items-center gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 btn-press transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <LogOut className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-['Cairo:SemiBold',_sans-serif] text-sm">
                      Sign Out
                    </div>
                    <p className="font-['Cairo:Regular',_sans-serif] text-xs text-red-500">
                      End your current session
                    </p>
                  </div>
                </Button>
              </CardContent>
            </Card>
            
            <div className="text-center mt-4">
              <p className="font-['Cairo:Regular',_sans-serif] text-[var(--theme-muted-foreground)] text-xs">
                Settings are automatically saved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}