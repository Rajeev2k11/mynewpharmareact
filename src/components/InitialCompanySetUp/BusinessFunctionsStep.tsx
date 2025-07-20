import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Users, Plus, Trash2, UserCheck } from "lucide-react";
import MultiSelectDropdown from "./MultiSelectDropdown";
import axios from "axios";

// Type for business function type
type BusinessFunctionType = {
  id: number | string;
  functionTypeName: string;
  description: string;
};

export default function BusinessFunctionsStep({
  businessFunctionDetails,
  locations,
  addBusinessFunctionDetail,
  removeBusinessFunctionDetail,
  handleBusinessFunctionDetailChange,
  handleFunctionalLeaderChange,
  errors = {} // key: function.id, value: { field: error }
}: {
  businessFunctionDetails: any[];
  locations: any[];
  addBusinessFunctionDetail: () => void;
  removeBusinessFunctionDetail: (id: string) => void;
  handleBusinessFunctionDetailChange: (id: string, field: string, value: any) => void;
  handleFunctionalLeaderChange: (id: string, field: string, value: string) => void;
  errors?: Record<string, Record<string, string>>
}) {
  const [businessFunctionTypes, setBusinessFunctionTypes] = useState<BusinessFunctionType[]>([]);
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [errorTypes, setErrorTypes] = useState<string | null>(null);

  useEffect(() => {
    setLoadingTypes(true);
    setErrorTypes(null);
    axios
      .get("https://cenexawebapi-bghsh2dzc4ftawfk.westus-01.azurewebsites.net/api/business-function-types", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        if (res.data?.isSuccess && Array.isArray(res.data.data)) {
          setBusinessFunctionTypes(res.data.data);
        } else {
          setErrorTypes("Failed to load function types.");
        }
      })
      .catch(() => setErrorTypes("Network error while loading function types."))
      .finally(() => setLoadingTypes(false));
  }, []);

  return (
    <div className="space-y-6">
      <Card className="border-none">
        <CardContent className="p-6 space-y-6 border-none">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-lg font-semibold">Business Functions</h4>
            </div>
            <Button
              type="button"
              onClick={addBusinessFunctionDetail}
              className="bg-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/90 text-white h-9 px-4"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Function
            </Button>
          </div>
          <div className="space-y-6">
            {businessFunctionDetails.map((func, index) => {
              const funcErrors = errors[func.id] || {};
              return (
                <div
                  key={func.id}
                  className="p-4 border border-[var(--theme-border)] rounded-lg bg-[var(--theme-secondary)]/30 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-sm font-semibold">
                      Business Function {index + 1}
                      {func.businessFunctionName && (
                        <span className="ml-2 text-[var(--theme-primary)]">
                          - {func.businessFunctionName}
                        </span>
                      )}
                    </h5>
                    {businessFunctionDetails.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeBusinessFunctionDetail(func.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 h-6 w-6 p-0"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    )}
                  </div>

                  <div className="space-y-4">
                    {/* Function Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Function Name *
                        </Label>
                        <Input
                          value={func.businessFunctionName}
                          onChange={e =>
                            handleBusinessFunctionDetailChange(
                              func.id,
                              "businessFunctionName",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Quality Assurance, Manufacturing"
                          className="h-9"
                        />
                        {funcErrors.businessFunctionName && (
                          <div className="text-xs text-red-500 mt-1">
                            {funcErrors.businessFunctionName}
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Function Type *
                        </Label>
                        <Select
                          value={func.businessFunctionType}
                          onValueChange={value =>
                            handleBusinessFunctionDetailChange(
                              func.id,
                              "businessFunctionType",
                              value
                            )
                          }
                          disabled={loadingTypes || !!errorTypes}
                        >
                          <SelectTrigger className="h-9">
                            <SelectValue placeholder={loadingTypes ? "Loading..." : (errorTypes || "Select function type")} />
                          </SelectTrigger>
                          <SelectContent>
                            {businessFunctionTypes.map((type) => (
                              <SelectItem
                                key={type.id}
                                value={type.functionTypeName}
                              >
                                {type.functionTypeName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errorTypes && (
                          <div className="text-xs text-red-500 mt-1">{errorTypes}</div>
                        )}
                        {funcErrors.businessFunctionType && (
                          <div className="text-xs text-red-500 mt-1">
                            {funcErrors.businessFunctionType}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Multi-Select Location Assignment */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Assigned Locations *
                      </Label>
                      <div className="text-xs text-[var(--theme-muted-foreground)] mb-2">
                        Select one or more locations for this business function
                      </div>
                      <MultiSelectDropdown
                        value={func.assignedLocationIds}
                        onChange={value =>
                          handleBusinessFunctionDetailChange(
                            func.id,
                            "assignedLocationIds",
                            value
                          )
                        }
                        options={locations.map(loc => ({
                          id: loc.id,
                          label:
                            loc.locationName ||
                            `Location ${locations.indexOf(loc) + 1}`,
                        }))}
                        placeholder="Select locations"
                        className="w-full"
                      />
                      {funcErrors.assignedLocationIds && (
                        <div className="text-xs text-red-500 mt-1">
                          {funcErrors.assignedLocationIds}
                        </div>
                      )}
                    </div>

                    {/* Optional Functional Leader Details */}
                    <div className="space-y-3 border-t border-[var(--theme-border)] pt-4">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-[var(--theme-primary)]" />
                        <Label className="text-sm font-medium">
                          Functional Leader (Optional)
                        </Label>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pl-6">
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-[var(--theme-muted-foreground)]">
                            Title
                          </Label>
                          <Input
                            value={func.functionalLeader?.title || ""}
                            onChange={e =>
                              handleFunctionalLeaderChange(
                                func.id,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="e.g., VP, Director, Manager"
                            className="h-8"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-[var(--theme-muted-foreground)]">
                            Name
                          </Label>
                          <Input
                            value={func.functionalLeader?.name || ""}
                            onChange={e =>
                              handleFunctionalLeaderChange(
                                func.id,
                                "name",
                                e.target.value
                              )
                            }
                            placeholder="Full name"
                            className="h-8"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-[var(--theme-muted-foreground)]">
                            Email
                          </Label>
                          <Input
                            type="email"
                            value={func.functionalLeader?.email || ""}
                            onChange={e =>
                              handleFunctionalLeaderChange(
                                func.id,
                                "email",
                                e.target.value
                              )
                            }
                            placeholder="email@company.com"
                            className="h-8"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-[var(--theme-muted-foreground)]">
                            Phone
                          </Label>
                          <Input
                            value={func.functionalLeader?.phone || ""}
                            onChange={e =>
                              handleFunctionalLeaderChange(
                                func.id,
                                "phone",
                                e.target.value
                              )
                            }
                            placeholder="+91 98765 43210"
                            className="h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
