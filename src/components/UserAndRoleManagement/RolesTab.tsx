import React, { useEffect } from 'react';
import { Shield, Edit, Trash2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { fetchUserRoles } from '../../features/userRoleManagement/userRolesSlice';

export const RolesTab: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: roles, loading, error } = useSelector((state: RootState) => state.userRoles);

  useEffect(() => {
    dispatch(fetchUserRoles());
  }, [dispatch]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[var(--theme-primary)]" />
            Role Management
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {loading && <div>Loading roles...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Card key={role.id} className="border-2 hover:border-[var(--theme-primary)]/30 transition-all duration-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.roleColor }} />
                    <h3 className="font-semibold text-sm">{role.roleName}</h3>
                  </div>
                  <Badge variant="outline">{role.userId ? 1 : 0} users</Badge>
                </div>
                <p className="text-sm text-[var(--theme-muted-foreground)] mb-3">
                  {role.userFirstName} {role.userLastName} ({role.userEmailId})
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[var(--theme-muted-foreground)]">
                    Permissions: {role.roleMenuUserPermissionsDto.length}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" disabled>
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

