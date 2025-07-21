import React, { useState } from 'react';
import { Shield, Plus, Edit, Trash2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import type { Role, Permission } from './types';

interface RolesTabProps {
  roles: Role[];
  allPermissions: Permission[];
  onAddRole: (role: Role) => void;
}

export const RolesTab: React.FC<RolesTabProps> = ({ roles, allPermissions, onAddRole }) => {
  const [isCreateRoleOpen, setIsCreateRoleOpen] = useState(false);
  const [roleForm, setRoleForm] = useState({
    name: '',
    description: '',
    permissions: [] as string[],
    color: '#2563eb'
  });

  const togglePermission = (permissionId: string) => {
    setRoleForm((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter((p) => p !== permissionId)
        : [...prev.permissions, permissionId]
    }));
  };

  const handleCreateRole = () => {
    const newRole: Role = {
      id: roleForm.name.toLowerCase().replace(/\s+/g, '-'),
      ...roleForm,
      userCount: 0
    };
    onAddRole(newRole);
    setRoleForm({
      name: '',
      description: '',
      permissions: [],
      color: '#2563eb'
    });
    setIsCreateRoleOpen(false);
  };

  const permissionsByCategory = allPermissions.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {} as Record<string, Permission[]>);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[var(--theme-primary)]" />
            Role Management
          </CardTitle>

          <Dialog open={isCreateRoleOpen} onOpenChange={setIsCreateRoleOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Role
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Role</DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Role Name *</Label>
                    <Input
                      value={roleForm.name}
                      onChange={(e) => setRoleForm({ ...roleForm, name: e.target.value })}
                      placeholder="Enter role name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role Color</Label>
                    <Input
                      type="color"
                      value={roleForm.color}
                      onChange={(e) => setRoleForm({ ...roleForm, color: e.target.value })}
                      className="h-10 w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Input
                    value={roleForm.description}
                    onChange={(e) => setRoleForm({ ...roleForm, description: e.target.value })}
                    placeholder="Describe the role's purpose"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Permissions</Label>
                  <div className="space-y-4">
                    {Object.entries(permissionsByCategory).map(([category, permissions]) => (
                      <div key={category} className="space-y-2">
                        <h4 className="font-medium text-sm text-[var(--theme-foreground)]">{category}</h4>
                        <div className="grid grid-cols-2 gap-2 pl-4">
                          {permissions.map((permission) => (
                            <div key={permission.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={permission.id}
                                checked={roleForm.permissions.includes(permission.id)}
                                onCheckedChange={() => togglePermission(permission.id)}
                              />
                              <Label htmlFor={permission.id} className="text-sm cursor-pointer">
                                {permission.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleCreateRole} className="flex-1">
                    Create Role
                  </Button>
                  <Button variant="outline" onClick={() => setIsCreateRoleOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Card key={role.id} className="border-2 hover:border-[var(--theme-primary)]/30 transition-all duration-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.color }} />
                    <h3 className="font-semibold text-sm">{role.name}</h3>
                  </div>
                  <Badge variant="outline">{role.userCount} users</Badge>
                </div>
                <p className="text-sm text-[var(--theme-muted-foreground)] mb-3">
                  {role.description}
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[var(--theme-muted-foreground)]">
                    Permissions: {role.permissions.length === 1 && role.permissions[0] === '*' ? 'All' : role.permissions.length}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

