import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface Company {
  id: string;
  companyName: string;
  companyDescription: string;
  businessAddress: string;
  city: string;
  state: string;
  zipCode: string;
  countryRegion: string;
  phoneNumber: string;
}

interface CompaniesState {
  companies: Company[];
  loading: boolean;
  error: string | null;
    isUpdateModeRedux: boolean;
  isOpenSidebar:boolean}

const initialState: CompaniesState = {
  companies: [],
  loading: false,
  error: null,
  isUpdateModeRedux: JSON.parse(localStorage.getItem('isUpdateModeRedux') || 'false'),
  isOpenSidebar:false
};

// Async thunk for fetching companies
export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/companies'
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

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setIsUpdateModeRedux: (state, action) => {
      state.isUpdateModeRedux = action.payload;
      localStorage.setItem('isUpdateModeRedux', JSON.stringify(action.payload));
    },
    setIsOpenSidebar:(state, action) => {
      state.isOpenSidebar = action.payload;}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default companiesSlice.reducer;
export const { setIsUpdateModeRedux,setIsOpenSidebar } = companiesSlice.actions;
