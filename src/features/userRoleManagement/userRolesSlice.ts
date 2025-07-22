import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface RoleMenuUserPermissionsDto {
  id: string;
  menuId: string;
  menuName: string;
  isAccess: boolean;
  parentId: string;
  url: string;
  iconClassName: string;
  permissionTypeId: number;
  permissionTypeName: string;
}

export interface UserRole {
  id: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  userEmailId: string;
  roleId: string;
  roleName: string;
  roleColor: string;
  roleMenuUserPermissionsDto: RoleMenuUserPermissionsDto[];
}

export interface UserRolesState {
  data: UserRole[];
  loading: boolean;
  error: string | null;
}

const initialState: UserRolesState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUserRoles = createAsyncThunk(
  'userRoles/fetchUserRoles',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/user-roles');
      if (response.data.isSuccess) {
        return response.data.data;
      } else {
        return rejectWithValue(response.data.message || 'Unknown error');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message || 'Network error');
      }
      return rejectWithValue('Network error');
    }
  }
);

const userRolesSlice = createSlice({
  name: 'userRoles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userRolesSlice.reducer; 