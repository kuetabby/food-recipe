import React from "react";

interface ButtonProps {
  className: string;
  onClick: () => void;
  label: string;
  id: string;
  disabled: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  id,
  onClick,
  label,
  disabled,
  children
}) => (
  <button
    id={id}
    className={className}
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
  >
    {children}
  </button>
);
