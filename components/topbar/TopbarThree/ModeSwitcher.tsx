"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeSwitcher = () => {
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
      className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-n0 dark:bg-bg4 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)]`}>
      {theme == "light" ? (
        <i className="las la-moon text-2xl"></i>
      ) : (
        <i className="las la-sun text-2xl"></i>
      )}
    </button>
  );
};

export default ModeSwitcher;
