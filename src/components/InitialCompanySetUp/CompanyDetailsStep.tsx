import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Globe, FileText, Phone, MapPin } from "lucide-react";

type CompanyDetailsStepProps = {
  formData: any;
  countryList: any[];
  stateList: any[];
  cityList: string[];
  onInputChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
};

export default function CompanyDetailsStep({
  formData,
  countryList,
  stateList,
  cityList,
  onInputChange,
  errors = {},
}: CompanyDetailsStepProps) {
  const handleNumberInput = (field: string, value: string, maxLen?: number) => {
    let sanitized = value.replace(/\D/g, "");
    if (maxLen) sanitized = sanitized.slice(0, maxLen);
    onInputChange(field, sanitized);
  };

  const renderFormField = (
    field: string,
    label: string,
    type = "input",
    options: string[] = [],
    IconComponent?: React.ElementType,
    placeholder = "",
    required = false,
 
  ) => {
    const hasValue = formData[field] && (formData[field] || "").length > 0;

    if (field === "phoneNo") {
      return (
        <div className="space-y-2 group relative z-10">
          <Label htmlFor="phoneNo" className="text-sm flex items-center gap-2">
            <div className="p-1 rounded bg-[var(--theme-secondary)] text-[var(--theme-muted-foreground)]">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="font-medium">{label}</span>
            {required && <span className="text-red-500">*</span>}
          </Label>
          <div className="flex">
            <div className="flex items-center px-2 sm:px-3 bg-[var(--theme-secondary)] rounded-l-lg border border-r-0 border-[var(--theme-border)] h-9 sm:h-10">
              <span className="text-sm font-medium text-[var(--theme-muted-foreground)]">+91</span>
            </div>
            <Input
              id="phoneNo"
              inputMode="numeric"
              maxLength={10}
              value={formData.phoneNo}
              onChange={e => handleNumberInput("phoneNo", e.target.value, 10)}
              placeholder="98907 73267"
              className="rounded-l-none h-9 sm:h-10 border border-[var(--theme-border)] focus:border-[var(--theme-primary)]"
            />
          </div>
          {errors.phoneNo && (
            <div className="text-xs text-red-500 mt-1">{errors.phoneNo}</div>
          )}
        </div>
      );
    }

    if (field === "zipCode") {
      return (
        <div className="space-y-2 group relative z-10">
          <Label className="text-sm flex items-center gap-2">
            <span className="font-medium">{label}</span>
          </Label>
          <Input
            inputMode="numeric"
            value={formData.zipCode}
            onChange={e => handleNumberInput("zipCode", e.target.value)}
            placeholder={placeholder || "462001"}
            className="h-9 sm:h-10 border"
          />
          {errors.zipCode && (
            <div className="text-xs text-red-500 mt-1">{errors.zipCode}</div>
          )}
        </div>
      );
    }

    return (
      <div className="space-y-2 group relative z-10">
        <Label className="text-sm flex items-center gap-2 text-[var(--theme-primary)]">
          {IconComponent && (
            <div className={`p-1 rounded transition-all duration-300
              ${hasValue ? "bg-[var(--theme-primary)]/10 text-[var(--theme-primary)]" : "bg-[var(--theme-secondary)] text-[var(--theme-muted-foreground)]"}
            `}>
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          )}
          <span className="font-medium">{label}</span>
          {required && <span className="text-red-500">*</span>}
        </Label>
        {type === "input" && (
          <Input
            value={formData[field] || ""}
            onChange={e => onInputChange(field, e.target.value)}
            placeholder={placeholder || `Enter ${label.toLowerCase()}`}
            className="h-9 sm:h-10 border text-[var(--theme-primary)]"
          />
        )}
        {type === "textarea" && (
          <Textarea
            value={formData[field] || ""}
            onChange={e => onInputChange(field, e.target.value)}
            placeholder={placeholder || `Enter ${label.toLowerCase()}`}
            rows={2}
            className="resize-none min-h-[40px] sm:min-h-[60px] "
          />
        )}
     {type === "select"  &&(

   
  <Select
  value={formData[field] || ""}
  onValueChange={value => onInputChange(field, value)}
>
  <SelectTrigger
    className={`h-9 sm:h-10 border-[var(--theme-border)] text-white rounded-lg px-3 focus:border-[var(--theme-primary)] focus:ring-2 focus:ring-[var(--theme-primary)] transition-colors `}
  >
    <SelectValue placeholder={`Select ${label}`} />
  </SelectTrigger>
  <SelectContent
    className={`max-h-56 overflow-y-auto bg-white rounded-xl shadow-lg border border-[var(--theme-border)] `}
    
  >
    {options.map(option => (
      <SelectItem key={option} value={option}>
        {option}
      </SelectItem>
    ))}
  </SelectContent>
</Select>)}
    
        {errors[field] && (
          <div className="text-xs text-red-500 mt-1">{errors[field]}</div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Corporate Info */}
      <Card className="bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] shadow-lg backdrop-blur-sm">
        <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-[var(--theme-foreground)]">Corporate Info</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {renderFormField(
              "companyName",
              "Company Name",
              "input",
              [],
              Building2,
              "Auryis Pharmaceuticals Ltd.",
              true,
              "text-[var(--theme-primary)]"
            )}
            {renderFormField(
              "countryRegion",
              "Country/Region",
              "select",
              countryList?.map((c: any) => c.name) || [],
              Globe,
              undefined,
              true,
             

            )}
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {renderFormField(
              "companyDescription",
              "Company Description",
              "textarea",
              [],
              FileText,
              "Brief description of your pharmaceutical company..."
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className="bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] shadow-lg backdrop-blur-sm">
        <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-[var(--theme-foreground)]">Contact Information</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {renderFormField("phoneNo", "Phone Number", "input", [], Phone, "", true)}
            {renderFormField(
              "businessAddress",
              "Business Address",
              "textarea",
              [],
              MapPin,
              "Complete business address..."
            )}
          </div>
        </CardContent>
      </Card>

      {/* Head Office Location */}
      <Card className="bg-gradient-to-br from-[var(--theme-card)] to-[var(--theme-secondary)] border-[var(--theme-border)] shadow-lg backdrop-blur-sm">
        <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-[var(--theme-foreground)]">Head Office Location</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {renderFormField(
              "state",
              "State",
              "select",
              stateList?.map((s: any) => s.name) || [],
              undefined
            )}
            {renderFormField(
              "city",
              "City",
              "select",
              cityList || [],
              undefined
            )}
            {renderFormField("zipCode", "Zip Code", "input")}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
