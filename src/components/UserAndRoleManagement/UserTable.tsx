import React, { useEffect } from 'react';
import {
  Edit,
  Key,
  MoreHorizontal,
  Tags,
  Trash2,
  UserCheck,
  UserX,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import {Badge} from '../ui/badge';
import {Button} from '../ui/button';
import type { Role, User } from './types';
import { Input } from '../ui/input';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/store/store';
import { fetchTableUsers } from '@/features/userRoleManagement/usersSlice';


interface Props {
  roles: Role[];
  users?: User[];
  onEditUser?: (user: User) => void;
  onToggleStatus?: (user: User) => void;
  onManageRoles?: (user: User) => void;
}

export const UserTable: React.FC<Props> = ({ users: propUsers, onEditUser, onToggleStatus, onManageRoles }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { users: reduxUsers } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchTableUsers());
  }, [dispatch]);

  const users = propUsers || reduxUsers;
console.log("users",users)
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'inactive': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'pending': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-100 text-green-800 border-green-200',
      inactive: 'bg-red-100 text-red-800 border-red-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return variants[status as keyof typeof variants] || variants.pending;
  };

  return (
    <>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center mb-4">
          <Input

            placeholder="Search logs..."
            className="max-w-[336px] w-full  bg-[#ececf0]"
            
            // onChange={(e) => setSearch(e.target.value)}
          />

         
          <Select >
            <SelectTrigger style={{backgroundColor:"#ececf0"}} className="w-full sm:w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 25, 50, 100].map(v => (
                <SelectItem key={v} value={v.toString()}>{v} per page</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select >
            <SelectTrigger style={{backgroundColor:"#ececf0"}} className="w-full sm:w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 25, 50, 100].map(v => (
                <SelectItem key={v} value={v.toString()}>{v} per page</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
    <div className="border rounded-lg">
    
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--theme-primary)]/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-[var(--theme-primary)]">
                      {user.firstName[0]}{user.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{user.firstName} {user.lastName}</div>
                    <div className="text-sm text-[var(--theme-muted-foreground)]">{user.emailId}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">
                    {/* {user.userRolesDto.find(r => r.id === user.azureId)?.name || user.role} */}
                  </Badge>
                  {user.userRolesDto[0].roleName && user.userRolesDto[0].roleName.length > 1 && (
                    <Badge variant="outline" className="text-xs">
                      +{user.userRolesDto[0].roleName.length - 1} more
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getStatusIcon(user.isActive ? 'active' : 'inactive')}
                  <Badge className={getStatusBadge(user.isActive ? 'active' : 'inactive')}>
                    {user.isActive ? 'active' : 'inactive'}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                {user.lastLogoutTime ? (
                  <div className="flex items-center gap-1 text-sm text-[var(--theme-muted-foreground)]">
                    <Clock className="w-3 h-3" />
                    {user.lastLogoutTime}
                  </div>
                ) : (
                  <span className="text-sm text-[var(--theme-muted-foreground)]">Never</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => onToggleStatus?.(user)}>
                      {user.isActive === true ? (
                        <>
                          <UserX className="w-4 h-4 mr-2 text-red-500" />
                          Deactivate User
                        </>
                      ) : (
                        <>
                          <UserCheck className="w-4 h-4 mr-2 text-green-500" />
                          Activate User
                        </>
                      )}
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => onManageRoles?.(user)}>
                      <Tags className="w-4 h-4 mr-2 text-[var(--theme-primary)]" />
                      Manage Roles
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => onEditUser?.(user)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit User
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Key className="w-4 h-4 mr-2" />
                      Reset Password
                    </DropdownMenuItem>

                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
          </>
  );
};

