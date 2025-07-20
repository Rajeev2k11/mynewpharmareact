import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface BusinessFunction {
  businessFunctionId: string;
  businessFunctionName: string;
}

export interface BusinessLocation {
  id: string;
  businessLocationCompanyName: string;
  companyId: string;
  businessAddress: string;
  city: string;
  state: string;
  zipCode: string;
  isActive: boolean;
  businessFunctions: BusinessFunction[];
}

interface BusinessLocationsState {
  locations: BusinessLocation[];
  loading: boolean;
  error: string | null;
}

const initialState: BusinessLocationsState = {
  locations: [],
  loading: false,
  error: null,
};

export const fetchBusinessLocations = createAsyncThunk(
  'businessLocations/fetchBusinessLocations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/business-locations'
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
// send Business

export const bulkUpsertBusinessLocations = createAsyncThunk(
  'businessLocations/bulkUpsertBusinessLocations',
  async (locations: Omit<BusinessLocation, 'businessFunctions'>[], { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/business-locations/bulk-upsert',
        locations,
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

const businessLocationsSlice = createSlice({
  name: 'businessLocations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBusinessLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload;
      })
      .addCase(fetchBusinessLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(bulkUpsertBusinessLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bulkUpsertBusinessLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload;
      })
      .addCase(bulkUpsertBusinessLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default businessLocationsSlice.reducer; 