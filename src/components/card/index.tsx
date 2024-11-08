import React from "react";
import Button from "../button"; // Import the reusable Button component created earlier

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  variant?: "dark" | "light" | "primary";
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  variant = "dark",
}) => {
  const backgroundClasses = {
    dark: "bg-[#000031] text-white",
    light: "bg-[#E7F0FF] text-gray-800",
    primary: "bg-primary text-white",
  };

  return (
    <div
      className={`p-4 rounded ${backgroundClasses[variant]} shadow-lg h-[193px] flex flex-col justify-between`}
    >
      <div className="">
        <h3 className="font-semibold leading-6">{title}</h3>
        <p className="text-sm mb-4 tracking-[-4%] leading-6">{description}</p>
      </div>
      <Button
        text={buttonText}
        onClick={onButtonClick}
        fullWidth
        variant={variant === "primary" ? "secondary" : "primary"}
      />
    </div>
  );
};

export default Card;
