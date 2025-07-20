import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Plus, Edit3, Trash2, Save, X } from "lucide-react";
import { Button } from "../ui/button";

// --- Types for props ---
interface CompanyLocation {
  id: string;
  locationName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isEditing?: boolean;
}

interface BusinessFunction {
  businessFunctionId: string;
  businessFunctionName: string;
}

interface BusinessLocation {
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

interface LocationsStepProps {
  locations: CompanyLocation[];
  addLocation: () => void;
  updateLocation: (locationId: string, field: keyof CompanyLocation, value: string | boolean) => void;
  removeLocation: (locationId: string) => void;
  toggleLocationEdit: (locationId: string) => void;
  errors?: Record<string, Partial<Record<keyof CompanyLocation, string>>>;
  businessLocations?: BusinessLocation[];
}

export default function LocationsStep({
  locations,
  addLocation,
  updateLocation,
  removeLocation,
  toggleLocationEdit,
  errors = {},
  businessLocations = [],
}: LocationsStepProps) {
  return (
    <div className="space-y-6 ">
      <div>
        <CardContent className="p-6 space-y-6 border-none">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-lg font-semibold">Company Locations</h4>
            </div>
            <Button
              type="button"
              onClick={addLocation}
              className="bg-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/90 text-white h-9 px-4"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Location
            </Button>
          </div>

          {locations.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-[var(--theme-border)] rounded-lg">
              <MapPin className="w-12 h-12 text-[var(--theme-muted-foreground)] mx-auto mb-4" />
              <p className="text-[var(--theme-muted-foreground)] mb-4">
                No locations added yet
              </p>
              <Button
                type="button"
                onClick={addLocation}
                variant="outline"
                className="border-[var(--theme-primary)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Location
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {locations.map((location, index) => {
                const locationErrors = errors[location.id] || {};
                return (
                  <div
                    key={location.id}
                    className="p-4 border border-[var(--theme-border)] rounded-lg bg-[var(--theme-secondary)]/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-sm font-semibold">
                        Location {index + 1}
                        {location.locationName && !location.isEditing && (
                          <span className="ml-2 text-[var(--theme-primary)]">
                            - {location.locationName}
                          </span>
                        )}
                      </h5>
                      <div className="flex items-center gap-2">
                        {!location.isEditing ? (
                          <>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleLocationEdit(location.id)}
                              className="text-[var(--theme-primary)] hover:text-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 h-6 w-6 p-0"
                            >
                              <Edit3 className="w-3 h-3" />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeLocation(location.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 h-6 w-6 p-0"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleLocationEdit(location.id)}
                              className="text-green-600 hover:text-green-700 hover:bg-green-50 h-6 w-6 p-0"
                            >
                              <Save className="w-3 h-3" />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeLocation(location.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 h-6 w-6 p-0"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>

                    {location.isEditing ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Company Name *
                          </Label>
                          <Input
                            value={location.locationName}
                            onChange={e =>
                              updateLocation(location.id, "locationName", e.target.value)
                            }
                            placeholder="e.g., Head Office, Manufacturing Plant, QA Lab"
                            className="h-9"
                          />
                          {locationErrors.locationName && (
                            <div className="text-xs text-red-500 mt-1">
                              {locationErrors.locationName}
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Address *</Label>
                          <Textarea
                            value={location.address}
                            onChange={e =>
                              updateLocation(location.id, "address", e.target.value)
                            }
                            placeholder="Complete address..."
                            rows={2}
                            className="resize-none"
                          />
                          {locationErrors.address && (
                            <div className="text-xs text-red-500 mt-1">
                              {locationErrors.address}
                            </div>
                          )}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">City *</Label>
                            <Input
                              value={location.city}
                              onChange={e =>
                                updateLocation(location.id, "city", e.target.value)
                              }
                              placeholder="City"
                              className="h-9"
                            />
                            {locationErrors.city && (
                              <div className="text-xs text-red-500 mt-1">
                                {locationErrors.city}
                              </div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">State *</Label>
                            <Select
                              value={location.state}
                              onValueChange={value =>
                                updateLocation(location.id, "state", value)
                              }
                            >
                              <SelectTrigger className="h-9">
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="madhya-pradesh">
                                  Madhya Pradesh
                                </SelectItem>
                                <SelectItem value="maharashtra">
                                  Maharashtra
                                </SelectItem>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="karnataka">Karnataka</SelectItem>
                                <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                                <SelectItem value="gujarat">Gujarat</SelectItem>
                                <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                <SelectItem value="west-bengal">West Bengal</SelectItem>
                              </SelectContent>
                            </Select>
                            {locationErrors.state && (
                              <div className="text-xs text-red-500 mt-1">
                                {locationErrors.state}
                              </div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Zip Code *</Label>
                            <Input
                              value={location.zipCode}
                              onChange={e =>
                                updateLocation(location.id, "zipCode", e.target.value)
                              }
                              placeholder="Zip Code"
                              className="h-9"
                            />
                            {locationErrors.zipCode && (
                              <div className="text-xs text-red-500 mt-1">
                                {locationErrors.zipCode}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm text-[var(--theme-muted-foreground)]">
                          <strong>Address:</strong> {location.address}
                        </p>
                        <p className="text-sm text-[var(--theme-muted-foreground)]">
                          <strong>Location:</strong> {location.city}, {location.state} - {location.zipCode}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </div>
    </div>
  );
}
