import { useState } from 'react';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../features/userRoleManagement/usersSlice';
import type { AppDispatch } from '../../../store/store';

export const useUserForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);

  const [userForm, setUserForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    role: '',
    department: '',
    isActive: true,
    isDeleted: false,
    azureId: '',
    userRolesDto: [],
    lastLogoutTime: '',
  });

  const handleUserFormChange = <K extends keyof typeof userForm>(field: K, value: typeof userForm[K]) => {
    setUserForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateUser = async () => {
    if (!userForm.firstName || !userForm.lastName || !userForm.emailId || !userForm.role) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const payload = {
      id: Date.now().toString(),
      firstName: userForm.firstName,
      middleName: userForm.middleName || '',
      lastName: userForm.lastName,
      phoneNumber: userForm.phoneNumber,
      emailId: userForm.emailId,
      department: userForm.department,
      isActive: true,
      isDeleted: false,
      azureId: '',
      logInUserId: userForm.role || '',
      logInUserRoleId: userForm.role || '',
      roleIds: [userForm.role],
    };

    try {
      await dispatch(createUser(payload)).unwrap();
      toast.success('User created successfully');
      setUserForm({
        firstName: '',
        middleName: '',
        lastName: '',
        emailId: '',
        phoneNumber: '',
        role: '',
        department: '',
        isActive: true,
        isDeleted: false,
        azureId: '',
        userRolesDto: [],
        lastLogoutTime: '',
      });
      setIsCreateUserOpen(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || 'Failed to create user');
      } else {
        toast.error('Failed to create user');
      }
    }
  };

  return {
    userForm,
    handleUserFormChange,
    handleCreateUser,
    isCreateUserOpen,
    setIsCreateUserOpen
  };
};
