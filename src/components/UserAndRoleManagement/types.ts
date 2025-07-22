// types.ts

export interface UserRoleDto {
  id: string;
  roleId: string;
  roleName: string;
  roleColor: string;
}

export interface User {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  emailId: string;
  department: string;
  isActive: boolean;
  isDeleted: boolean;
  azureId: string;
  userRolesDto: UserRoleDto[];
  lastLogoutTime: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
  color?: string;
}

export interface Permission {
  id: string;
  name: string;
  category: string;
}

export interface UserLog {
  id: string;
  timestamp: string;
  userName: string;
  roleName: string;
  action: string;
  performedBy: string;
  date: Date;
}
  