import React, { useState } from 'react';
import { Users, UserPlus, Mail, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { MultiSelectRole } from './MultiSelectRole';
import type { User, Role } from './types';
import { UserTable } from './UserTable';

interface Props {
  users: User[];
  roles: Role[];
}

export const UserTab: React.FC<Props> = ({ users, roles }) => {
  // User creation form state
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    assignedRoles: [] as string[],
    sendInvite: false,
  });

  // Filters and search state
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  // Filtered users (updated logic)
  const filteredUsers = users.filter(user => {
    const matchesSearch = `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) || user.emailId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.isActive === (statusFilter === 'active');
    // Use the first roleId from userRolesDto for filtering
    const userRoleId = user.userRolesDto && user.userRolesDto.length > 0 ? user.userRolesDto[0].roleId : '';
    const matchesRole = roleFilter === 'all' || userRoleId === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  });

  // User creation handler (placeholder)
  const handleCreateUser = () => {
    // Implement user creation logic here
    setIsCreateUserOpen(false);
  };

  return (
    <Card className="space-y-6 bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
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
            <DialogContent className="max-w-lg bg-white">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name *</Label>
                    <Input
                      value={userForm.firstName}
                      onChange={e => setUserForm({ ...userForm, firstName: e.target.value })}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name *</Label>
                    <Input
                      value={userForm.lastName}
                      onChange={e => setUserForm({ ...userForm, lastName: e.target.value })}
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    value={userForm.email}
                    onChange={e => setUserForm({ ...userForm, email: e.target.value })}
                    placeholder="user@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={userForm.phone}
                    onChange={e => setUserForm({ ...userForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Primary Role *</Label>
                    <Select value={userForm.role} onValueChange={value => setUserForm({ ...userForm, role: value })}>
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
                    <Select value={userForm.department} onValueChange={value => setUserForm({ ...userForm, department: value })}>
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
                    onChange={value => setUserForm({ ...userForm, assignedRoles: value })}
                    options={roles}
                    placeholder="Select additional roles"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-[var(--theme-secondary)]/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[var(--theme-primary)]" />
                    <span className="text-sm font-medium">Send invitation email</span>
                  </div>
                  <Switch
                    checked={userForm.sendInvite}
                    onCheckedChange={checked => setUserForm({ ...userForm, sendInvite: checked })}
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
        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--theme-muted-foreground)] w-4 h-4" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              {roles.map(role => (
                <SelectItem key={role.id} value={role.id}>
                  {role.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Users Table (replace with your enhanced table logic) */}
        <UserTable users={filteredUsers} roles={roles} />
      </CardContent>
    </Card>
  );
};
