import React, { useState, useEffect, useRef } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface MultiSelectDropdownProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: { id: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select options",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update select all state based on selections
  useEffect(() => {
    setSelectAll(value.length === options.length && options.length > 0);
  }, [value, options]);

  const handleSelectAll = () => {
    if (selectAll) {
      onChange([]);
    } else {
      onChange(options.map((option) => option.id));
    }
  };

  const handleOptionToggle = (optionId: string) => {
    const newValue = value.includes(optionId)
      ? value.filter((id) => id !== optionId)
      : [...value, optionId];
    onChange(newValue);
  };

  const handleRemoveTag = (optionId: string) => {
    onChange(value.filter((id) => id !== optionId));
  };

  const getSelectedLabels = () => {
    return value
      .map((id) => options.find((option) => option.id === id)?.label)
      .filter(Boolean);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Selected Tags Display */}
      <div
        className="min-h-[40px] w-full border border-[var(--theme-border)] rounded-lg p-2 bg-[var(--theme-card)] cursor-pointer hover:border-[var(--theme-primary)]/50 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1 items-center">
          {value.length === 0 ? (
            <span className="text-[var(--theme-muted-foreground)] text-sm">
              {placeholder}
            </span>
          ) : (
            getSelectedLabels().map((label, index) => {
              const optionId = value[index];
              return (
                <Badge
                  key={optionId}
                  variant="secondary"
                  className="flex items-center gap-1 bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] border-[var(--theme-primary)]/20 hover:bg-[var(--theme-primary)]/20"
                >
                  {label}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveTag(optionId);
                    }}
                    className="h-4 w-4 p-0 hover:bg-red-100 hover:text-red-600 ml-1"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              );
            })
          )}
          <div className="ml-auto">
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-[var(--theme-muted-foreground)]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[var(--theme-muted-foreground)]" />
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[var(--theme-card)] border border-[var(--theme-border)] rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {/* Select All Option */}
          {options.length > 0 && (
            <div
              className="flex items-center space-x-3 p-3 hover:bg-[var(--theme-secondary)] cursor-pointer border-b border-[var(--theme-border)]"
              onClick={handleSelectAll}
            >
              <Checkbox
                checked={selectAll}
                className="data-[state=checked]:bg-[var(--theme-primary)] data-[state=checked]:border-[var(--theme-primary)]"
              />
              <span className="text-sm font-medium text-[var(--theme-foreground)]">
                Select all options
              </span>
            </div>
          )}

          {/* Options List */}
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option.id}
                className="flex items-center space-x-3 p-3 hover:bg-[var(--theme-secondary)] cursor-pointer transition-colors duration-150"
                onClick={() => handleOptionToggle(option.id)}
              >
                <Checkbox
                  checked={value.includes(option.id)}
                  className="data-[state=checked]:bg-[var(--theme-primary)] data-[state=checked]:border-[var(--theme-primary)]"
                />
                <span className="text-sm text-[var(--theme-foreground)]">
                  {option.label}
                </span>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {options.length === 0 && (
            <div className="p-3 text-center text-sm text-[var(--theme-muted-foreground)]">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
