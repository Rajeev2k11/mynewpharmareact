import { Country, State, City } from 'country-state-city';

// 1. Get all countries (limit to commonly used if needed)
export const getAllCountries = () => Country.getAllCountries();

// 2. Get states by country ISO code
export const getStatesByCountry = (countryCode: string) =>
  State.getStatesOfCountry(countryCode);

// 3. Get cities by state + country ISO code
export const getCitiesByState = (countryCode: string, stateCode: string) =>
  City.getCitiesOfState(countryCode, stateCode);

// 4. Custom zip mapping
export const getZipCodeByCity = (country: string, state: string, city: string): string => {
  const zipData: Record<string, Record<string, Record<string, string>>> = {
    India: {
      Karnataka: { Bangalore: '560001' },
      Maharashtra: { Mumbai: '400001' },
      Delhi: { Delhi: '110001' },
    },
    Canada: {
      Ontario: { Toronto: 'M5H 2N2' },
    },
    'United States': {
      California: { 'Los Angeles': '90001' },
      Texas: { Dallas: '75201' },
    },
    'United Kingdom': {
      England: { London: 'EC1A 1BB' },
    },
  };

  return zipData[country]?.[state]?.[city] ?? '';
};
