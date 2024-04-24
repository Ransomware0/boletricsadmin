"use client";

import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

interface InputPasswordProps {
  placeholder: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Added onChange prop with optional event handler
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Added onBlur prop
}

const InputPassword = ({
  placeholder,
  defaultValue,
  onChange, // Destructure onChange prop from props
  onBlur, // Destructure onBlur prop from props
}: InputPasswordProps) => {
  const [showPass, setShowPass] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Call the onChange prop handler if it's provided
    onChange?.(event); // Optional chaining to handle potential undefined onChange
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Call the onBlur prop handler if it's provided
    onBlur?.(event); // Optional chaining to handle potential undefined onBlur
  };

  return (
    <div className=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 relative">
      <input
        type={showPass ? "text" : "password"}
        className="w-11/12 text-sm bg-transparent"
        placeholder={placeholder}
        id="password"
        defaultValue={defaultValue ? defaultValue : ""}
        required
        onChange={handleInputChange} // Use the local function to handle input change
        onBlur={handleInputBlur} // Add onBlur handler
      />
      <span
        onClick={() => setShowPass(!showPass)}
        className="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        {showPass ? <IconEye /> : <IconEyeOff />}
      </span>
    </div>
  );
};

export default InputPassword;