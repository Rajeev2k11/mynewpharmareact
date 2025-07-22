import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox'; // Ensure you have this component!
import { useState } from "react";
import { Plus } from 'lucide-react';

// Demo permissions array for mapping
const PERMISSIONS = [
  {
    category: "Assessments",
    permissions: [
      { id: "create_assessments", label: "Create Assessments" },
      { id: "edit_assessments", label: "Edit Assessments" },
      { id: "delete_assessments", label: "Delete Assessments" },
      { id: "view_assessments", label: "View Assessments" },
    ],
  },
  {
    category: "Reports",
    permissions: [
      { id: "create_reports", label: "Create Reports" },
      { id: "edit_reports", label: "Edit Reports" },
      { id: "view_reports", label: "View Reports" },
    ],
  },
  {
    category: "User Management",
    permissions: [
      { id: "create_users", label: "Create Users" },
      { id: "edit_users", label: "Edit Users" },
      { id: "delete_users", label: "Delete Users" },
      { id: "view_users", label: "View Users" },
    ],
  },
  {
    category: "System",
    permissions: [
      { id: "manage_settings", label: "Manage Settings" },
      { id: "system_admin", label: "System Administration" },
    ],
  },
];

export function CreateRoleDialog({ open, onOpenChange }) {
  const [roleForm, setRoleForm] = useState({
    name: "",
    color: "#272f44",
    description: "",
    permissions: [],
  });

  const togglePermission = (id) => {
    setRoleForm((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(id)
        ? prev.permissions.filter((pid) => pid !== id)
        : [...prev.permissions, id],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Role
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg p-0">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mt-4 px-8">Create New Role</DialogTitle>
        </DialogHeader>
        <div className="px-8 pb-8 pt-2 space-y-4">
          {/* Name and Color */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="roleName" className="mb-1 block">Role Name *</Label>
              <Input
                id="roleName"
                value={roleForm.name}
                onChange={(e) => setRoleForm({ ...roleForm, name: e.target.value })}
                placeholder="Enter role name"
                className="h-10"
              />
            </div>
            <div>
              <Label htmlFor="roleColor" className="mb-1 block">Role Color</Label>
              <Input
                id="roleColor"
                type="color"
                value={roleForm.color}
                onChange={(e) => setRoleForm({ ...roleForm, color: e.target.value })}
                className="h-10 w-full p-0"
                style={{ border: '1px solid #ccc', background: '#fff' }}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="mb-1 block">Description</Label>
            <Input
              id="description"
              value={roleForm.description}
              onChange={(e) => setRoleForm({ ...roleForm, description: e.target.value })}
              placeholder="Describe the role's purpose"
              className="h-10"
            />
          </div>

          {/* Permissions */}
          <div>
            <Label className="mb-2 block">Permissions</Label>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {PERMISSIONS.map((cat) => (
                <div key={cat.category}>
                  <div className="font-medium text-[15px] mb-1">{cat.category}</div>
                  <div className="flex flex-col gap-1">
                    {cat.permissions.map((perm) => (
                      <label key={perm.id} className="inline-flex items-center gap-2 cursor-pointer text-sm py-1">
                        <Checkbox
                          id={perm.id}
                          checked={roleForm.permissions.includes(perm.id)}
                          onCheckedChange={() => togglePermission(perm.id)}
                        />
                        {perm.label}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-2">
            <Button className="flex-1 h-10">Create Role</Button>
            <Button type="button" variant="outline" className="flex-1 h-10" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
