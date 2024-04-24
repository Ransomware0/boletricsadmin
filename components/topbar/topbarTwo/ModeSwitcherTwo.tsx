"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeSwitcherTwo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleThemeSwitch = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <button
      aria-label="dark mode switch"
      onClick={handleThemeSwitch}
      className={`w-[60px] h-8 bg-primary p-1 relative rounded-[40px] flex justify-center items-center gap-2`}>
      <i
        className={`las la-sun text-xl relative z-[2] ${
          theme == "dark" ? "text-n0" : "text-primary"
        }`}></i>
      <i
        className={`las la-moon text-xl relative z-[2] ${
          theme == "light" ? "text-n0" : "text-primary"
        }`}></i>
      <div
        className={`absolute duration-300 transition-all left-1 rounded-full w-6 h-6 bg-n0 top-1 ${
          theme == "light" ? "translate-x-0" : "translate-x-7"
        }`}></div>
    </button>
  );
};

export default ModeSwitcherTwo;
