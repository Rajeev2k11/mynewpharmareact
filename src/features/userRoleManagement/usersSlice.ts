import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchTableUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/users'
      );
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

export const createUser = createAsyncThunk(
  'users/createUser',
  async (userPayload: {
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
    logInUserId: string;
    logInUserRoleId: string;
    roleIds: string[];
  }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/users',
        userPayload,
        { headers: { 'Content-Type': 'application/json' } }
      );
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTableUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchTableUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default usersSlice.reducer;
