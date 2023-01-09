import React from "react";
import { UseFormRegister } from "react-hook-form";

export interface DynamicInputProps {
  name: string;
  autoComplete?: string;
  type?: string;
  element?: "input" | "textarea";
  label: string;
  children?: React.ReactNode;
  className?: string;
  required?: boolean;
  value?: string | number;
  placeholder?: string;
  error: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line react/forbid-prop-types
  attrs?: object;
}

function DynamicInput({
  name,
  autoComplete = "",
  type = "text",
  element = "input",
  label,
  attrs = {},
  className = "",
  required = true,
  placeholder = "",
  children = null,
  value = "",
  register,
  error,
}: DynamicInputProps) {
  const Tag = element;

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={name} className="block text-sm font-medium text-kg-brown">
        {label}
        <div className="mt-1">
          <Tag
            {...register(name, { required: required })}
            type={type}
            name={name}
            id={name}
            defaultValue={value}
            required={required}
            rows={4}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className="block w-full px-4 py-1.5 text-base border-2 border-kg-brown/40 appearance-none focus:outline-none focus:border-kg-yellow"
            // eslint-disable-next-line
            {...attrs}
          >
            {children}
          </Tag>
          {error && (
            <span className="block mt-1 font-bold text-red-600">
              Dieses Feld ist benötigt.
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

export default DynamicInput;
