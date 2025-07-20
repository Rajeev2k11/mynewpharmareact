import React from "react";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import {
  Building2,
  MapPin,
  Users,
  Rocket,
  Eye,
  MapPin as MapPinIcon,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function ReviewStep({ formData, isUpdateMode }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Review Header */}
      <Card className="border-none bg-gradient-to-r from-[#ffffff] to-[#f5effc]">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">
                {isUpdateMode
                  ? "Review Company Updates"
                  : "Review & Complete Setup"}
              </h3>
              <p className="text-[var(--theme-muted-foreground)]">
                {isUpdateMode
                  ? "Review your company information changes before updating"
                  : "Review all your company information before completing the setup"}
              </p>
            </div>
          </div>

          {/* Setup Progress Indicator */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-xs text-blue-800 font-medium">
                Corporate Info
              </div>
              <div className="text-xs text-blue-600 mt-1">✓ Complete</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
              <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-xs text-green-800 font-medium">
                Locations
              </div>
              <div className="text-xs text-green-600 mt-1">
                ✓ {formData.locations.length} Added
              </div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-xs text-purple-800 font-medium">
                Functions
              </div>
              <div className="text-xs text-purple-600 mt-1">
                ✓ {formData.businessFunctionDetails.length} Configured
              </div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
              <Rocket className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="text-xs text-orange-800 font-medium">Ready</div>
              <div className="text-xs text-orange-600 mt-1">✓ All Set</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Information Summary */}
      <Card className="border-none bg-gradient-to-r from-[#ffffff] to-[#f5effc]">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-lg font-semibold">Company Information</h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-[var(--theme-secondary)]/30 rounded-lg">
                <Label className="text-sm font-medium text-[var(--theme-muted-foreground)]">
                  Company Name
                </Label>
                <p className="text-base font-semibold mt-1">
                  {formData.companyName}
                </p>
              </div>
              <div className="p-4 bg-[var(--theme-secondary)]/30 rounded-lg">
                <Label className="text-sm font-medium text-[var(--theme-muted-foreground)]">
                  Country/Region
                </Label>
                <p className="text-base font-semibold mt-1">
                  {formData.countryRegion}
                </p>
              </div>
              <div className="p-4 bg-[var(--theme-secondary)]/30 rounded-lg">
                <Label className="text-sm font-medium text-[var(--theme-muted-foreground)]">
                  Phone Number
                </Label>
                <p className="text-base font-semibold mt-1">
                  +91 {formData.phoneNo}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[var(--theme-secondary)]/30 rounded-lg">
                <Label className="text-sm font-medium text-[var(--theme-muted-foreground)]">
                  Head Office Location
                </Label>
                <p className="text-base font-semibold mt-1">
                  {formData.city}, {formData.state} - {formData.zipCode}
                </p>
              </div>
              <div className="p-4 bg-[var(--theme-secondary)]/30 rounded-lg">
                <Label className="text-sm font-medium text-[var(--theme-muted-foreground)]">
                  Business Address
                </Label>
                <p className="text-sm mt-1">
                  {formData.businessAddress || "Not specified"}
                </p>
              </div>
              <div className="p-4 bg-[var(--theme-secondary)]/30 rounded-lg">
                <Label className="text-sm font-medium text-[var(--theme-muted-foreground)]">
                  Company Description
                </Label>
                <p className="text-sm mt-1">
                  {formData.companyDescription || "Not specified"}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Locations Summary */}
      <Card className="border-none bg-gradient-to-r from-[#ffffff] to-[#f5effc]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <MapPinIcon className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-lg font-semibold">Company Locations</h4>
            </div>
            <Badge
              variant="outline"
              className="bg-emerald-50 text-emerald-700 border-emerald-200"
            >
              {formData.locations.length} Location
              {formData.locations.length > 1 ? "s" : ""}
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.locations.map((location, index) => (
              <div
                key={location.id}
                className="p-4 border border-[var(--theme-border)] rounded-lg bg-[var(--theme-secondary)]/20 hover:bg-[var(--theme-secondary)]/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-[var(--theme-primary)]" />
                    <h5 className="font-semibold">
                      {location.locationName}
                    </h5>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    #{index + 1}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-[var(--theme-muted-foreground)]">
                  <p>
                    <strong>Address:</strong> {location.address}
                  </p>
                  <p>
                    <strong>Location:</strong> {location.city}, {location.state} - {location.zipCode}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Functions Summary */}
      <Card className="border-none bg-gradient-to-r from-[#ffffff] to-[#f5effc] p-8">
        <CardContent className="p-6 ">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-lg font-semibold">Business Functions</h4>
            </div>
            <Badge
              variant="outline"
              className="bg-purple-50 text-purple-700 border-purple-200"
            >
              {formData.businessFunctionDetails.length} Function
              {formData.businessFunctionDetails.length > 1 ? "s" : ""}
            </Badge>
          </div>
          <div className="space-y-4">
            {formData.businessFunctionDetails.map((func, index) => (
              <div
                key={func.id}
                className="p-4 border border-[var(--theme-border)] rounded-lg bg-[var(--theme-secondary)]/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-semibold">
                        {func.businessFunctionName}
                      </h5>
                      <Badge variant="secondary" className="text-xs">
                        {func.businessFunctionType?.replace(/-/g, " ")}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    #{index + 1}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-xs font-medium text-[var(--theme-muted-foreground)]">
                      Assigned Locations
                    </Label>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {func.assignedLocationIds.map(locationId => {
                        const location = formData.locations.find(
                          loc => loc.id === locationId
                        );
                        return location ? (
                          <Badge
                            key={locationId}
                            variant="outline"
                            className="text-xs bg-green-50 text-green-700 border-green-200"
                          >
                            {location.locationName}
                          </Badge>
                        ) : null;
                      })}
                      <Badge variant="outline" className="text-xs">
                        {func.assignedLocationIds.length} location
                        {func.assignedLocationIds.length > 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </div>
                  {func.functionalLeader?.name && (
                    <div>
                      <Label className="text-xs font-medium text-[var(--theme-muted-foreground)]">
                        Functional Leader
                      </Label>
                      <div className="mt-1">
                        <p className="text-sm font-medium">
                          {func.functionalLeader.title &&
                            `${func.functionalLeader.title} `}
                          {func.functionalLeader.name}
                        </p>
                        {func.functionalLeader.email && (
                          <p className="text-xs text-[var(--theme-muted-foreground)]">
                            {func.functionalLeader.email}
                          </p>
                        )}
                        {func.functionalLeader.phone && (
                          <p className="text-xs text-[var(--theme-muted-foreground)]">
                            {func.functionalLeader.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Setup Completion Notice */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-green-800 mb-1">
                {isUpdateMode ? "Ready to Update" : "Ready to Complete Setup"}
              </h4>
              <p className="text-sm text-green-700">
                {isUpdateMode
                  ? "Your company information will be updated with the changes above."
                  : "Your pharmaceutical company profile is configured and ready to use. Click the button below to complete the setup process."}
              </p>
            </div>
            {!isUpdateMode && (
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-green-700">Complete</div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
