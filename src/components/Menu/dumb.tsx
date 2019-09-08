import React from "react";

interface ButtonProps {
  className: string;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  label,
  children
}) => (
  <button className={className} onClick={onClick} aria-label={label}>
    {children}
  </button>
);

interface AreaProps {
  className: string;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | number;
  readOnly: boolean;
  disabled: boolean;
}

export const Area: React.FC<AreaProps> = ({
  className,
  id,
  placeholder,
  onChange,
  value,
  readOnly,
  disabled
}) => (
  <textarea
    id={id}
    data-testid={id}
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    readOnly={readOnly}
    disabled={disabled}
  />
);

interface InputProps {
  className: string;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  readOnly: boolean;
  disabled: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  id,
  placeholder,
  onChange,
  value,
  readOnly,
  disabled
}) => (
  <input
    id={id}
    data-testid={id}
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    readOnly={readOnly}
    disabled={disabled}
  />
);
