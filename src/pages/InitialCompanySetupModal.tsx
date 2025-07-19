import React, { useState, useEffect } from "react";


import axios from "axios";
import {
  getAllCountries,
  getStatesByCountry,
  getCitiesByState,
  getZipCodeByCity,
} from "../utils//locationData";

import { Button } from "../components/ui/button";
import MinimalAnimatedBackground from "@/components/InitialCompanySetUp/MinimalAnimatedBackground";
import StepIndicator from "@/components/InitialCompanySetUp/StepIndicator";
import ReviewStep from "@/components/InitialCompanySetUp/ReviewStep";
import BusinessFunctionsStep from "@/components/InitialCompanySetUp/BusinessFunctionsStep";
import LocationsStep from "@/components/InitialCompanySetUp/LocationsStep";
import CompanyDetailsStep from "@/components/InitialCompanySetUp/CompanyDetailsStep";
import { companyDetailsSchema } from "@/utils/validation/companyDetailsSchema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { fetchCompanies, setIsUpdateModeRedux } from "@/features/companies/companiesSlice";
import { fetchBusinessLocations } from "@/features/companies/businessLocationsSlice";
import { fetchBusinessFunctions } from "@/features/companies/businessFunctionsSlice";

// --- Interfaces ---
interface InitialCompanySetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPageMode?: boolean;
  isUpdateMode?: boolean;
  existingData?: CompanyData;
}

interface CompanyLocation {
  id: string;
  locationName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isEditing?: boolean;
}

interface FunctionalLeader {
  title: string;
  name: string;
  email: string;
  phone: string;
}

interface BusinessFunctionDetail {
  id: string;
  businessFunctionName: string;
  businessFunctionType: string;
  assignedLocationIds: string[];
  functionalLeader?: FunctionalLeader;
}

export interface CompanyData {
  companyName: string;
  companyDescription: string;
  businessAddress: string;
  phoneNo: string;
  email: string;
  website: string;
  countryRegion: string;
  state: string;
  city: string;
  locations: CompanyLocation[];
  zipCode: string;
  businessFunctionDetails: BusinessFunctionDetail[];
}

const defaultCompanyData: CompanyData = {
  companyName: "",
  companyDescription: "",
  businessAddress: "",
  phoneNo: "",
  email: "",
  website: "",
  countryRegion: "",
  state: "",
  city: "",
  locations: [],
  zipCode: "",
  businessFunctionDetails: [],
};

export function InitialCompanySetupModal({
isOpen,
onClose,
  isPageMode = false,
  isUpdateMode = false,
  existingData,
}: InitialCompanySetupModalProps) {

   const dispatch = useDispatch<AppDispatch>();
  const { companies, loading, error, isUpdateModeRedux } = useSelector((state: RootState) => state.companies);
  const { locations,  locationsLoading,  locationsError } = useSelector((state: RootState) => state.businessLocations);
  const { businessFun, loading: businessFunctionsLoading, error: businessFunctionsError } = useSelector((state: RootState) => state.businessFunctions);
  console.log("locations from redux", locations);
  // --- State management ---
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [countryList, setCountryList] = useState<{ name: string; isoCode: string }[]>([]);
  const [stateList, setStateList] = useState<{ name: string; isoCode: string }[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [businessFunctionTypes, setBusinessFunctionTypes] = useState<
    { id: number; functionTypeName: string; description: string }[]
  >([]);
  const [formData, setFormData] = useState<CompanyData>(existingData || {
    ...defaultCompanyData,
    businessFunctionDetails: [
      {
        id: `function-${Date.now()}`,
        businessFunctionName: "",
        businessFunctionType: "",
        assignedLocationIds: [],
        functionalLeader: undefined,
      },
    ],
  });
console.log("isUpdateMode:", isUpdateMode, isSubmitting, isUpdateModeRedux);
  // --- Step 1 field errors for real-time validation ---
  const [step1Errors, setStep1Errors] = useState<Record<string, string>>({});
const companyToEdit = companies && companies.length > 0 ? companies[0] : null;


  // --- Helper functions for other steps ---
  const getLocationErrors = (): Record<string, Partial<Record<keyof CompanyLocation, string>>> => {
    const errors: Record<string, Partial<Record<keyof CompanyLocation, string>>> = {};
    formData.locations.forEach((loc) => {
      if (loc.isEditing) {
        const locErrors: Partial<Record<keyof CompanyLocation, string>> = {};
        if (!loc.locationName?.trim()) locErrors.locationName = "Location name is required.";
        if (!loc.address?.trim()) locErrors.address = "Address is required.";
        if (!loc.city?.trim()) locErrors.city = "City is required.";
        if (!loc.state?.trim()) locErrors.state = "State is required.";
        if (!loc.zipCode?.trim()) locErrors.zipCode = "Zip code is required.";
        if (Object.keys(locErrors).length > 0) errors[loc.id] = locErrors;
      }
    });
    return errors;
  };

    useEffect(() => {
    dispatch(fetchCompanies());
    dispatch(fetchBusinessLocations());
    dispatch(fetchBusinessFunctions());
  }, [dispatch]);


useEffect(() => {
  if (isUpdateModeRedux && companyToEdit) {
    setFormData({
      ...formData,
      companyName: companyToEdit.companyName,
      companyDescription: companyToEdit.companyDescription,
      businessAddress: companyToEdit.businessAddress,
      phoneNo: companyToEdit.phoneNumber,
      countryRegion: companyToEdit.countryRegion,
      state: companyToEdit.state,
      city: companyToEdit.city,
      zipCode: companyToEdit.zipCode,
      // ...add any extra fields you want to update
    });
  }
  // eslint-disable-next-line
}, [isSubmitting, companyToEdit]);

useEffect(() => {
  if (isUpdateModeRedux && locations && locations.length > 0) {
    console.log("location", locations)
    setFormData({
      ...formData,
      // id:locationToEdit;
      // businessLocationCompanyName: string;
      // companyId: string;
      // businessAddress: string;
      // city: string;
      // state: string;
      // zipCode: string;
      // isActive: boolean;
      // businessFunctions: BusinessFunction[];
      // ...add any extra fields you want to update
    });
  }
  // eslint-disable-next-line
}, [isSubmitting, locations]);

useEffect(() => {
  if (isUpdateModeRedux && businessFun && businessFun.length > 0) {
    console.log("location", businessFun)
    setFormData({
      ...formData,
    // "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "functionName": "string",
    //   "businessFunctionType": "string",
    //   "title": "string",
    //   "hodName": "string",
    //   "emailId": "string",
    //   "mobileNumber": "string",
    //   "isActive": true,
    //   "businessLocations": [
    //     {
    //       "businessLocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //       "businessLocationCompanyName": "string",
    //       "city": "string",
    //       "companyCityCombination": "string"
    //     }
    });
  }
  // eslint-disable-next-line
}, [isSubmitting, businessFun]);


  const getBusinessFunctionErrors = () => {
    const errors = {};
    formData.businessFunctionDetails.forEach(func => {
      const funcErrors = {};
      if (!func.businessFunctionName?.trim()) funcErrors.businessFunctionName = "Function name is required.";
      if (!func.businessFunctionType?.trim()) funcErrors.businessFunctionType = "Function type is required.";
      if (!func.assignedLocationIds || func.assignedLocationIds.length === 0)
        funcErrors.assignedLocationIds = "Select at least one location.";
      errors[func.id] = funcErrors;
    });
    return errors;
  };

  // --- Fetch country list and business function types ---
  useEffect(() => {
    setCountryList(getAllCountries());
    fetchBusinessFunctionTypes();
  }, []);

  async function fetchBusinessFunctionTypes() {
    try {
      const response = await axios.get(
        "https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/business-function-types",
        { headers: { Accept: "application/json" } }
      );
      if (response.data?.isSuccess) {
        setBusinessFunctionTypes(response.data.data);
      }
    } catch (error) {
      // handle error as desired
    }
  }

  // --- Update state/city lists when country/state changes ---
  useEffect(() => {
    const selectedCountry = countryList.find((c) => c.name === formData.countryRegion);
    if (selectedCountry) {
      const states = getStatesByCountry(selectedCountry.isoCode);
      setStateList(states);
      setCityList([]);
      setFormData((prev) => ({ ...prev, state: "" }));
    }
    // eslint-disable-next-line
  }, [formData.countryRegion]);

  useEffect(() => {
    const selectedCountry = countryList.find((c) => c.name === formData.countryRegion);
    const selectedState = stateList.find((s) => s.name === formData.state);
    if (selectedCountry && selectedState) {
      const cities = getCitiesByState(selectedCountry.isoCode, selectedState.isoCode).map((c) => c.name);
      setCityList(cities);
      setFormData((prev) => ({ ...prev, city: "" }));
    }
    // eslint-disable-next-line
  }, [formData.state]);

  useEffect(() => {
    const zip = getZipCodeByCity(formData.countryRegion, formData.state, formData.city);
    if (zip) {
      setFormData((prev) => ({ ...prev, zipCode: zip }));
    }
    // eslint-disable-next-line
  }, [formData.city]);

  // --- Pre-fill with existing data for update mode ---
  useEffect(() => {
    if (isUpdateMode && existingData) {
      setFormData(existingData);
    }
  }, [isUpdateMode, existingData]);

  // --- Steps config ---
  const totalSteps = 4;

  useEffect(() => {
    if (currentStep > 1) {
      setCompletedSteps((prev) => new Set([...prev, currentStep - 1]));
    }
  }, [currentStep]);

  // --- Field handlers (Step 1 - with real-time Zod validation) ---
  const handleInputChange = (field: keyof CompanyData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Real-time Zod validation only for step 1 fields
    if (currentStep === 1) {
      const result = companyDetailsSchema.safeParse({ ...formData, [field]: value });
      if (!result.success) {
        const err = result.error.flatten().fieldErrors;
        setStep1Errors((prev) => ({
          ...prev,
          [field]: err[field]?.[0] || "",
        }));
      } else {
        setStep1Errors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    }
  };

  // --- Locations handlers ---
  const addLocation = () => {
    const newLocation: CompanyLocation = {
      id: `location-${Date.now()}`,
      locationName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      isEditing: true,
    };
    setFormData((prev) => ({
      ...prev,
      locations: [newLocation, ...prev.locations],
    }));
  };

  const updateLocation = (
    locationId: string,
    field: keyof CompanyLocation,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      locations: prev.locations.map((loc) =>
        loc.id === locationId ? { ...loc, [field]: value } : loc
      ),
    }));
  };

  const removeLocation = (locationId: string) => {
    setFormData((prev) => ({
      ...prev,
      locations: prev.locations.filter((loc) => loc.id !== locationId),
      businessFunctionDetails: prev.businessFunctionDetails.map((func) => ({
        ...func,
        assignedLocationIds: func.assignedLocationIds.filter((id) => id !== locationId),
      })),
    }));
  };

  const toggleLocationEdit = (locationId: string) => {
    setFormData((prev) => ({
      ...prev,
      locations: prev.locations.map((loc) =>
        loc.id === locationId ? { ...loc, isEditing: !loc.isEditing } : loc
      ),
    }));
  };

  // --- Business functions handlers ---
  const handleBusinessFunctionDetailChange = (
    functionId: string,
    field: keyof BusinessFunctionDetail,
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      businessFunctionDetails: prev.businessFunctionDetails.map((func) =>
        func.id === functionId ? { ...func, [field]: value } : func
      ),
    }));
  };

  const handleFunctionalLeaderChange = (
    functionId: string,
    field: keyof FunctionalLeader,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      businessFunctionDetails: prev.businessFunctionDetails.map((func) =>
        func.id === functionId
          ? {
              ...func,
              functionalLeader: {
                ...func.functionalLeader,
                title: func.functionalLeader?.title || "",
                name: func.functionalLeader?.name || "",
                email: func.functionalLeader?.email || "",
                phone: func.functionalLeader?.phone || "",
                [field]: value,
              },
            }
          : func
      ),
    }));
  };

  const addBusinessFunctionDetail = () => {
    const newFunction: BusinessFunctionDetail = {
      id: `function-${Date.now()}`,
      businessFunctionName: "",
      businessFunctionType: "",
      assignedLocationIds: [],
      functionalLeader: undefined,
    };
    setFormData((prev) => ({
      ...prev,
      businessFunctionDetails: [newFunction, ...prev.businessFunctionDetails],
    }));
  };

  const removeBusinessFunctionDetail = (functionId: string) => {
    setFormData((prev) => ({
      ...prev,
      businessFunctionDetails:
        prev.businessFunctionDetails.length > 1
          ? prev.businessFunctionDetails.filter((func) => func.id !== functionId)
          : prev.businessFunctionDetails,
    }));
  };

  // --- Step validation with Zod for step 1 ---
  const getStep1Errors = () => {
    const result = companyDetailsSchema.safeParse(formData);
    if (result.success) return {};
    const fieldErrors = result.error.flatten().fieldErrors;
    const errors: Record<string, string> = {};
    for (const key in fieldErrors) {
      if (fieldErrors[key]?.[0]) errors[key] = fieldErrors[key]![0];
    }
    return errors;
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        // Step 1 valid if Zod passes
        return Object.keys(getStep1Errors()).length === 0;
      case 2:
        return (
          formData.locations.length > 0 &&
          formData.locations.every(
            (loc) =>
              loc.locationName &&
              loc.address &&
              loc.city &&
              loc.state &&
              !loc.isEditing
          )
        );
      case 3:
        return formData.businessFunctionDetails.every(
          (func) =>
            func.businessFunctionName &&
            func.businessFunctionType &&
            func.assignedLocationIds.length > 0
        );
      case 4:
        return true;
      default:
        return false;
    }
  };

  // --- Navigation handlers ---
  const handleNext = () => {
    // If not valid, show all errors for current step 1
    if (currentStep === 1) {
      setStep1Errors(getStep1Errors());
    }
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  // --- Submit handler ---
  const handleSubmit = async () => {
    dispatch(setIsUpdateModeRedux(true));
    setIsSubmitting(true);
    try {
      const payload = {
        companyName: formData.companyName,
        companyDescription: formData.companyDescription,
        businessAddress: formData.businessAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        countryRegion: formData.countryRegion,
        phoneNumber: formData.phoneNo,
        logInUserId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      };
      const response = await axios.post(
        "https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/companies",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      if (response.data?.isSuccess) {
        alert("Company created successfully!");
        onClose();
      } else {
        alert(response.data.message || "Failed to create company");
      }
    } catch (error) {
      alert("Something went wrong while creating the company.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render the current step ---
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CompanyDetailsStep
            formData={formData}
            countryList={countryList}
            stateList={stateList}
            cityList={cityList}
            onInputChange={handleInputChange}
            errors={step1Errors}
          />
        );
      case 2:
        return (
          <LocationsStep
            locations={formData.locations}
            addLocation={addLocation}
            updateLocation={updateLocation}
            removeLocation={removeLocation}
            toggleLocationEdit={toggleLocationEdit}
            errors={currentStep === 2 ? getLocationErrors() : {}}
          />
        );
      case 3:
        return (
          <BusinessFunctionsStep
            businessFunctionDetails={formData.businessFunctionDetails}
            locations={formData.locations}
            addBusinessFunctionDetail={addBusinessFunctionDetail}
            removeBusinessFunctionDetail={removeBusinessFunctionDetail}
            handleBusinessFunctionDetailChange={handleBusinessFunctionDetailChange}
            handleFunctionalLeaderChange={handleFunctionalLeaderChange}
            errors={currentStep === 3 ? getBusinessFunctionErrors() : {}}
          />
        );
      case 4:
        return (
          <ReviewStep
            formData={formData}
            isUpdateMode={isUpdateMode}
          />
        );
      default:
        return null;
    }
  };

  // --- Main modal content ---
  const modalContent = (
    <div className="space-y-6 relative">
      <MinimalAnimatedBackground currentStep={currentStep} />
      <div className="relative z-10">
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          completedSteps={completedSteps}
        />
        <div className="min-h-[400px]">{renderCurrentStep()}</div>
        <div className="flex items-center justify-between pt-4 border-t border-[var(--theme-border)]">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 bg-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/90 text-white"
              >
                Next
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {isUpdateMode ? "Updating..." : "Setting up..."}
                  </>
                ) : (
                  <>Complete Setup</>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // --- Page vs Dialog mode rendering ---
  if (isPageMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--theme-background)] to-[var(--theme-secondary)] relative overflow-hidden">
        <MinimalAnimatedBackground currentStep={currentStep} />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[var(--theme-card)] rounded-xl shadow-2xl p-8 backdrop-blur-sm">
              {modalContent}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <MinimalAnimatedBackground currentStep={currentStep} />
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {isUpdateMode ? "Update Company Setup" : "Initial Company Setup"}
        </CardTitle>
        <CardDescription className="text-[var(--theme-muted-foreground)] text-red-600">
          {isUpdateMode
            ? "Update your pharmaceutical company profile and operational structure"
            : "Let's set up your pharmaceutical company profile and operational structure"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>{modalContent}</div>
      </CardContent>
    </Card>
  );
}
