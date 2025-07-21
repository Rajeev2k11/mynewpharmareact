// types.ts

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    role: string;
    department: string;
    status: 'active' | 'inactive' | 'pending';
    lastLogin?: string;
    createdAt: string;
    permissions: string[];
    assignedRoles?: string[];
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
  