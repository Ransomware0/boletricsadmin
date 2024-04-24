import MobileSearch from "@/components/shared/MobileSearch";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import MessageBtn from "../TopbarOne/MessageBtn";
import ModeSwitcher from "../TopbarOne/ModeSwitcher";
import Notification from "../TopbarOne/Notification";
import Profile from "../TopbarOne/Profile";
import SearchBar from "../TopbarOne/SearchBar";
import SelectLayout from "../TopbarOne/SelectLayout";
import SwitchLanguage from "../TopbarOne/SwitchLanguage";

const TopbarFive = ({
  sidebarIsOpen,
  setSidebar,
}: {
  sidebarIsOpen: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  const { theme } = useTheme();
  return (
    <nav className="bg-n0 dark:bg-bg4  w-full mx-auto fixed z-30">
      <div
        className={`px-3 py-3 duration-300 navbar-top max-w-[1850px] w-full mx-auto md:py-4 xl:py-6 sm:gap-3 flex justify-between items-center`}>
        <div className="flex grow items-center justify-start gap-4 xxl:gap-6">
          <button
            onClick={() => setSidebar(!sidebarIsOpen)}
            className="xl:hidden">
            <i className="las la-bars"></i>
          </button>
          <Link href="/" className="shrink-0">
            <Image
              width={174}
              height={38}
              src={
                theme == "dark"
                  ? "/images/logo-with-text-dark.png"
                  : "/images/logo-with-text.png"
              }
              alt="logo"
              className="max-xl:hidden"
            />
            <Image
              width={36}
              height={36}
              src={
                theme == "dark" ? "/images/logo-dark.png" : "/images/logo.png"
              }
              className="hidden min-[370px]:block xl:hidden"
              alt="logo"
            />
          </Link>
          <SearchBar />
        </div>
        <div className="flex items-center justify-end grow gap-3 sm:gap-4 xxl:gap-6">
          <MobileSearch />
          <SelectLayout />
          <ModeSwitcher />
          <Notification />
          <MessageBtn />
          <SwitchLanguage />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default TopbarFive;
