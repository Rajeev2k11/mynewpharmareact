import React from 'react';
import { Users, UserPlus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { MultiSelectRole } from './MultiSelectRole'; // extracted from your existing component
import type { User, Role } from './types'; // custom interfaces/types from shared folder
import { UserTable } from './UserTable'; // the table and action logic in separate file
import { useUserForm } from './hooks/useUserForm'; // custom hook to manage form state


interface Props {
  users: User[];
  roles: Role[];
  onAddUser: (user: User) => void;
}

export const UserTab: React.FC<Props> = ({ users, roles, onAddUser }) => {
  const {
    userForm,
    handleUserFormChange,
    handleCreateUser,
    isCreateUserOpen,
    setIsCreateUserOpen,
  } = useUserForm({ roles, onAddUser });

  return (
    <Card className='border-none bg-white shadow-2xl'>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 ">
            <Users className="w-5 h-5 text-[var(--theme-primary)]" />
            User Management
          </CardTitle>

          <Dialog open={isCreateUserOpen} onOpenChange={setIsCreateUserOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Add User
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name *</Label>
                    <Input
                      value={userForm.firstName}
                      onChange={(e) => handleUserFormChange('firstName', e.target.value)}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name *</Label>
                    <Input
                      value={userForm.lastName}
                      onChange={(e) => handleUserFormChange('lastName', e.target.value)}
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    value={userForm.email}
                    onChange={(e) => handleUserFormChange('email', e.target.value)}
                    placeholder="user@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={userForm.phone}
                    onChange={(e) => handleUserFormChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Primary Role *</Label>
                    <Select value={userForm.role} onValueChange={(val) => handleUserFormChange('role', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map(role => (
                          <SelectItem key={role.id} value={role.id}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Select value={userForm.department} onValueChange={(val) => handleUserFormChange('department', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Quality Assurance">Quality Assurance</SelectItem>
                        <SelectItem value="Regulatory Affairs">Regulatory Affairs</SelectItem>
                        <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="Research & Development">Research & Development</SelectItem>
                        <SelectItem value="Clinical Operations">Clinical Operations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Assigned Roles</Label>
                  <MultiSelectRole
                    value={userForm.assignedRoles}
                    onChange={(val) => handleUserFormChange('assignedRoles', val)}
                    options={roles}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleCreateUser} className="flex-1">
                    Create User
                  </Button>
                  <Button variant="outline" onClick={() => setIsCreateUserOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent>
        <UserTable users={users} roles={roles} />
      </CardContent>
    </Card>
  );
};

