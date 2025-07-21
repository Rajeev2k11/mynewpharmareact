import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from '../features/companies/companiesSlice';
import businessLocationsReducer from '../features/companies/businessLocationsSlice';
import businessFunctionsReducer from '../features/companies/businessFunctionsSlice';
import usersReducer from '../features/companies/usersSlice';

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
    businessLocations: businessLocationsReducer,
    businessFunctions: businessFunctionsReducer,
    users: usersReducer,
    // ...other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
