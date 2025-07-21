import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Shield, FileText } from 'lucide-react';
import { UserTab } from '@/components/UserAndRoleManagement/UserTab';
import { RolesTab } from '@/components/UserAndRoleManagement/RolesTab';
import { UserLogsTab } from '@/components/UserAndRoleManagement/UserLogsTab';


export function UserRoleManagement() {
  const [activeTab, setActiveTab] = useState<'users' | 'roles' | 'logs'>('users');

  // Example counts, replace with real data as needed
  const userCount = 5;
  const roleCount = 4;

  return (
    <div className="space-y-6 px-6 ">
      <div className="flex items-center justify-between">
        <div className='mt-4'>
          <h2 className="text-xl font-bold text-[var(--theme-foreground)]" style={{ fontFamily: 'var(--theme-font-family, "Cairo", sans-serif)' }}>
            User & Role Management
          </h2>
          <p className="text-[var(--theme-muted-foreground)] mt-1">
            Manage users, roles, and permissions across your organization
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as 'users' | 'roles' | 'logs')} className="w-full bg-muted min-w-[340px]">
          <TabsList  className=" flex bg-[#ececf0] rounded-full p-1 gap-2 shadow-sm border border-[#e0e0e0]">
            <TabsTrigger
              style={{backgroundColor:'#ffffff'}}
              value="users"
              className={`flex items-center gap-2 px-7 py-2 rounded-full font-medium transition-all duration-200 text-base
                ${activeTab === 'users'
                  ? 'bg-[#ffffff] border-4 border-[#bdbdbd] shadow text-black'
                  : 'border-4 border-transparent text-black'}
              `}
            >
              <Users className="w-5 h-5" />
              <span>Users</span>
              <span className="ml-1 text-base font-semibold">({userCount})</span>
            </TabsTrigger>
            <TabsTrigger
              style={{backgroundColor:'#ffffff'}}
              value="roles"
              className={`flex items-center gap-2 px-7 py-2 rounded-full font-medium transition-all duration-200 text-base
                ${activeTab === 'roles'
                  ? 'bg-[#ffffff] border-4 border-[#bdbdbd] shadow text-black'
                  : 'border-4 border-transparent text-black'}
              `}
            >
              <Shield className="w-5 h-5" />
              <span>Roles</span>
              <span className="ml-1 text-base font-semibold">({roleCount})</span>
            </TabsTrigger>
            <TabsTrigger
              style={{backgroundColor:'#ffffff'}}
              value="logs"
              className={`flex items-center gap-2 px-7 py-2 rounded-full font-medium transition-all duration-200 text-base
                ${activeTab === 'logs'
                  ? 'bg-[#ffffff] border-4 border-[#bdbdbd] shadow text-black'
                  : 'border-4 border-transparent text-black'}
              `}
            >
              <FileText className="w-5 h-5" />
              <span>User Logs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <UserTab users={[]} roles={[]} onAddUser={() => {}} />
          </TabsContent>

          <TabsContent value="roles">
            <RolesTab roles={[]} allPermissions={[]} onAddRole={() => {}} />
          </TabsContent>

          <TabsContent value="logs">
            <UserLogsTab logs={[]} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}