import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  label?: string;
  id?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  id,
  label,
  disabled
}) => (
  <button
    className={className}
    id={id}
    onClick={onClick}
    disabled={disabled}
    AreaProps={AreaProps}
  >
    Add Recipe
  </button>
);

interface InputProps {
  className: string;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string | number;
  disabled: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  id,
  placeholder,
  onChange,
  type,
  value,
  disabled
}) => (
  <input
    id={id}
    data-testid={id}
    className={className}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    disabled={disabled}
  />
);

interface AreaProps {
  className: string;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | number;
  disabled: boolean;
}

export const Area: React.FC<AreaProps> = ({
  className,
  id,
  placeholder,
  onChange,
  value,
  disabled
}) => (
  <textarea
    id={id}
    data-testid={id}
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    disabled={disabled}
  />
);

interface LabelProps {
  className: string;
  children: string;
  label: string;
}

export const Label: React.FC<LabelProps> = ({ className, children, label }) => (
  <label htmlFor={label} className={className}>
    {children}
  </label>
);
