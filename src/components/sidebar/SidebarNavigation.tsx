import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  FileText, 
  History, 
  Shield, 
  BarChart3,
  ChevronRight
} from 'lucide-react';

interface SidebarNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function SidebarNavigation({ activeTab, onTabChange }: SidebarNavigationProps) {
  const navigationItems = [
    { 
      id: 'assessment-rules', 
      label: 'Assessment Rules', 
      icon: FileText,
      description: 'Configure audit rules and AI parameters',
      badge: 'Active'
    },
    { 
      id: 'historical', 
      label: 'Historical Assessments', 
      icon: History,
      description: 'View past audit results and reports',
      badge: null
    },
    { 
      id: 'compliance', 
      label: 'Compliance Profile', 
      icon: Shield,
      description: 'Regulatory compliance overview',
      badge: null
    },
    { 
      id: 'reports', 
      label: 'Detailed Reports', 
      icon: BarChart3,
      description: 'Comprehensive analytics and insights',
      badge: null
    }
  ];

  return (
    <div className="w-64 border-r border-[var(--theme-border)] bg-[var(--theme-background)] h-full overflow-y-auto">
      <div className="p-4">
        <h2 
          className="text-lg mb-4"
          style={{ 
            fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)', 
            fontWeight: 700, 
            color: 'var(--theme-foreground)' 
          }}
        >
          Navigation
        </h2>
        
        <div className="space-y-2">
          {navigationItems.map((item, index) => (
            <Card 
              key={item.id}
              className={`cursor-pointer transition-all duration-300 hover-lift animate-slide-up ${
                activeTab === item.id 
                  ? 'bg-[var(--theme-primary)] text-white border-[var(--theme-primary)] shadow-lg' 
                  : 'hover:bg-[var(--theme-secondary)] border-[var(--theme-border)]'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onTabChange(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeTab === item.id 
                        ? 'bg-white/20' 
                        : 'bg-[var(--theme-secondary)]'
                    }`}>
                      <item.icon className={`w-4 h-4 ${
                        activeTab === item.id 
                          ? 'text-white' 
                          : 'text-[var(--theme-primary)]'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div 
                        className={`text-sm mb-1 ${
                          activeTab === item.id 
                            ? 'text-white' 
                            : 'text-[var(--theme-foreground)]'
                        }`}
                        style={{ 
                          fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)', 
                          fontWeight: 600
                        }}
                      >
                        {item.label}
                      </div>
                      <p 
                        className={`text-xs ${
                          activeTab === item.id 
                            ? 'text-white/80' 
                            : 'text-[var(--theme-muted-foreground)]'
                        }`}
                        style={{ 
                          fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)', 
                          fontWeight: 400
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <Badge 
                        variant="secondary"
                        className={`text-xs ${
                          activeTab === item.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-[var(--theme-primary)] text-white'
                        }`}
                      >
                        {item.badge}
                      </Badge>
                    )}
                    <ChevronRight className={`w-4 h-4 ${
                      activeTab === item.id 
                        ? 'text-white' 
                        : 'text-[var(--theme-muted-foreground)]'
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}