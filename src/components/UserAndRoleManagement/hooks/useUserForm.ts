import { useState } from 'react';
import type { Role, User } from '../types';
import { toast } from 'sonner';

interface UseUserFormParams {
  roles: Role[];
  onAddUser: (user: User) => void;
}

export const useUserForm = ({ roles, onAddUser }: UseUserFormParams) => {
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);

  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    status: 'active' as const,
    sendInvite: true,
    assignedRoles: [] as string[]
  });

  const handleUserFormChange = <K extends keyof typeof userForm>(field: K, value: typeof userForm[K]) => {
    setUserForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateUser = () => {
    if (!userForm.firstName || !userForm.lastName || !userForm.email || !userForm.role) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      ...userForm,
      createdAt: new Date().toISOString().split('T')[0],
      permissions: roles.find(r => r.id === userForm.role)?.permissions || []
    };

    onAddUser(newUser);
    toast.success('User created successfully');

    setUserForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: '',
      department: '',
      status: 'active',
      sendInvite: true,
      assignedRoles: []
    });

    setIsCreateUserOpen(false);
  };

  return {
    userForm,
    handleUserFormChange,
    handleCreateUser,
    isCreateUserOpen,
    setIsCreateUserOpen
  };
};
