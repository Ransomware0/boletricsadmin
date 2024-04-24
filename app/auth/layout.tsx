"use client";
import ellipse1 from "@/public/images/ellipse1.png";
import ellipse2 from "@/public/images/ellipse2.png";
import logoDark from "@/public/images/logo-with-text-dark.png";
import logo from "@/public/images/logo-with-text.png";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen bg-secondary1/5 dark:bg-bg3">
      <Image
        src={ellipse1}
        className="absolute top-16 md:top-5 right-10"
        alt="ellipse"
      />
      <Image
        src={ellipse2}
        className="absolute bottom-6 left-0 sm:left-32"
        alt="ellipse"
      />
      <Image
        className="p-6 lg:p-8 relative z-[2]"
        src={theme == "dark" ? logoDark : logo}
        alt="logo"
      />
      <div className="flex items-center justify-center mt-7">
        <div className="relative z-[2] max-w-[1416px] mx-auto px-3 pb-10">
          {children}
        </div>
      </div>
    </div>
  );
}
