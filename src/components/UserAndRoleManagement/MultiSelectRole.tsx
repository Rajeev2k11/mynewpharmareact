import React, { useEffect, useState } from 'react';
import { Tags, X, ChevronDown, ChevronUp } from 'lucide-react';
import type { Role } from './types';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

interface MultiSelectRoleProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: Role[];
  placeholder?: string;
  className?: string;
}

const MultiSelectRole: React.FC<MultiSelectRoleProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select roles',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    setSelectAll(value.length === options.length && options.length > 0);
  }, [value, options]);

  const handleSelectAll = () => {
    onChange(selectAll ? [] : options.map((r) => r.id));
  };

  const handleToggleRole = (id: string) => {
    onChange(value.includes(id) ? value.filter((r) => r !== id) : [...value, id]);
  };

  const handleRemoveTag = (id: string) => {
    onChange(value.filter((r) => r !== id));
  };

  const selectedRoles = value.map((id) => options.find((r) => r.id === id)).filter(Boolean) as Role[];

  return (
    <div className={`relative ${className}`}>
      {/* Input */}
      <div
        className="min-h-[40px] w-full border border-[var(--theme-border)] rounded-lg p-2 bg-[var(--theme-card)] cursor-pointer hover:border-[var(--theme-primary)]/50 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1 items-center">
          {selectedRoles.length === 0 ? (
            <span className="text-[var(--theme-muted-foreground)] text-sm">{placeholder}</span>
          ) : (
            selectedRoles.map((role) => (
              <Badge
                key={role.id}
                variant="secondary"
                className="flex items-center gap-1 text-xs"
                style={{
                  backgroundColor: `${role.color}15`,
                  color: role.color,
                  borderColor: `${role.color}30`
                }}
              >
                <Tags className="w-3 h-3" />
                {role.name}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveTag(role.id);
                  }}
                  className="h-4 w-4 p-0 hover:bg-red-100 hover:text-red-600 ml-1"
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))
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

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-[var(--theme-card)] border border-[var(--theme-border)] rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.length > 0 && (
            <div
              className="flex items-center space-x-3 p-3 hover:bg-[var(--theme-secondary)] cursor-pointer border-b border-[var(--theme-border)]"
              onClick={handleSelectAll}
            >
              <Checkbox
                checked={selectAll}
                className="data-[state=checked]:bg-[var(--theme-primary)] data-[state=checked]:border-[var(--theme-primary)]"
              />
              <span className="text-sm font-medium text-[var(--theme-foreground)]">Select all roles</span>
            </div>
          )}

          <div className="py-1">
            {options.map((role) => (
              <div
                key={role.id}
                className="flex items-center space-x-3 p-3 hover:bg-[var(--theme-secondary)] cursor-pointer"
                onClick={() => handleToggleRole(role.id)}
              >
                <Checkbox
                  checked={value.includes(role.id)}
                  className="data-[state=checked]:bg-[var(--theme-primary)] data-[state=checked]:border-[var(--theme-primary)]"
                />
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.color }} />
                  <div>
                    <span className="text-sm text-[var(--theme-foreground)] font-medium">{role.name}</span>
                    <p className="text-xs text-[var(--theme-muted-foreground)]">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {options.length === 0 && (
            <div className="p-3 text-center text-sm text-[var(--theme-muted-foreground)]">
              No roles available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { MultiSelectRole };
