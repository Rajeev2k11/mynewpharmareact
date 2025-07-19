import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface BusinessFunctionLocation {
  businessLocationId: string;
  businessLocationCompanyName: string;
  city: string;
  companyCityCombination: string;
}

export interface BusinessFunction {
  id: string;
  companyId: string;
  functionName: string;
  businessFunctionType: string;
  title: string;
  hodName: string;
  emailId: string;
  mobileNumber: string;
  isActive: boolean;
  businessLocations: BusinessFunctionLocation[];
}

interface BusinessFunctionsState {
  businessFun: BusinessFunction[];
  loading: boolean;
  error: string | null;
}

const initialState: BusinessFunctionsState = {
  businessFun: [],
  loading: false,
  error: null,
};

export const fetchBusinessFunctions = createAsyncThunk(
  'businessFunctions/fetchBusinessFunctions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/business-functions'
      );
      if (response.data.isSuccess) {
        return response.data.data;
      } else {
        return rejectWithValue(response.data.message || 'Unknown error');
      }
    } catch (error: any) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

const businessFunctionsSlice = createSlice({
  name: 'businessFunctions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessFunctions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBusinessFunctions.fulfilled, (state, action) => {
        state.loading = false;
        state.businessFun = action.payload;
      })
      .addCase(fetchBusinessFunctions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default businessFunctionsSlice.reducer; 