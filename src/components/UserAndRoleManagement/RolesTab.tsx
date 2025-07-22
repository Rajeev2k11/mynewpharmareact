import React, { useEffect, useState } from "react";
import { Shield, Edit, Trash2, Plus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { fetchUserRoles } from "../../features/userRoleManagement/userRolesSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox"; // Make sure you have this!

// Permissions config (can also fetch from API)
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

export const RolesTab: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: roles, loading, error } = useSelector(
    (state: RootState) => state.userRoles
  );

  // Modal open state
  const [open, setOpen] = useState(false);

  // Local form state for demo
  const [roleForm, setRoleForm] = useState({
    name: "",
    color: "#272f44",
    description: "",
    permissions: [],
  });

  // Reset form when dialog opens/closes
  useEffect(() => {
    if (!open) {
      setRoleForm({
        name: "",
        color: "#272f44",
        description: "",
        permissions: [],
      });
    }
  }, [open]);

  useEffect(() => {
    dispatch(fetchUserRoles());
  }, [dispatch]);

  const togglePermission = (id: string) => {
    setRoleForm((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(id)
        ? prev.permissions.filter((pid) => pid !== id)
        : [...prev.permissions, id],
    }));
  };

  const handleCreateRole = () => {
    // TODO: Dispatch redux action or call API here
    // Example: dispatch(createRole(roleForm))
    setOpen(false);
  };

  return (
    <Card  className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[var(--theme-primary)]" />
            Role Management
          </CardTitle>
          {/* Dialog for Create Role */}
          <div >

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
          
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Role
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-lg p-0 rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold mt-4 px-8">
                  Create New Role
                </DialogTitle>
              </DialogHeader>
              <div className="px-8 pb-8 pt-2 space-y-4">
                {/* Name and Color */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="roleName" className="mb-1 block">
                      Role Name *
                    </Label>
                    <Input
                      id="roleName"
                      value={roleForm.name}
                      onChange={(e) =>
                        setRoleForm({ ...roleForm, name: e.target.value })
                      }
                      placeholder="Enter role name"
                      className="h-10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="roleColor" className="mb-1 block">
                      Role Color
                    </Label>
                    <Input
                      id="roleColor"
                      type="color"
                      value={roleForm.color}
                      onChange={(e) =>
                        setRoleForm({ ...roleForm, color: e.target.value })
                      }
                      className="h-10 w-full p-0"
                      style={{
                        border: "1px solid #ccc",
                        background: "#fff",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
                {/* Description */}
                <div>
                  <Label htmlFor="description" className="mb-1 block">
                    Description
                  </Label>
                  <Input
                    id="description"
                    value={roleForm.description}
                    onChange={(e) =>
                      setRoleForm({ ...roleForm, description: e.target.value })
                    }
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
                        <div className="font-medium text-[15px] mb-1">
                          {cat.category}
                        </div>
                        <div className="flex flex-col gap-1">
                          {cat.permissions.map((perm) => (
                            <label
                              key={perm.id}
                              className="inline-flex items-center gap-2 cursor-pointer text-sm py-1"
                            >
                              <Checkbox
                                id={perm.id}
                                checked={roleForm.permissions.includes(perm.id)}
                                onCheckedChange={() =>
                                  togglePermission(perm.id)
                                }
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
                  <Button
                    className="flex-1 h-10"
                    onClick={handleCreateRole}
                    disabled={!roleForm.name}
                  >
                    Create Role
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 h-10"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Card
              key={role.id}
              className="border-2 hover:border-[var(--theme-primary)]/30 transition-all duration-200"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: role.color || "#d1d5db" }}
                    />
                    <h3 className="font-semibold text-sm">{role.name}</h3>
                  </div>
                  <Badge variant="outline">{role.userCount} users</Badge>
                </div>
                <p className="text-sm text-[var(--theme-muted-foreground)] mb-3">
                  {role.description}
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[var(--theme-muted-foreground)]">
                    Permissions:{" "}
                    {role.permissions.length === 1 && role.permissions[0] === "*"
                      ? "All"
                      : role.permissions.length}
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
