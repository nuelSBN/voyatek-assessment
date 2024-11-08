import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  fullWidth = false,
  variant = "primary",
}) => {
  const baseClasses =
    "px-4 py-2 rounded text-white font-medium transition text-[14px] duration-200";
  const widthClasses = fullWidth ? "w-full" : "w-auto";
  const colorClasses =
    variant === "primary"
      ? "bg-primary hover:bg-blue-600"
      : "bg-white text-primary hover:bg-blue-100";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${widthClasses} ${colorClasses} `}
    >
      {text}
    </button>
  );
};

export default Button;
