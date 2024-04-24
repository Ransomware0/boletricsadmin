import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import HorizontalMenu from "../../sidebar/HorizontalMenu";
import Profile from "../TopbarOne/Profile";
import MessageBtn from "../TopbarThree/MessageBtn";
import ModeSwitcher from "../TopbarThree/ModeSwitcher";
import Notification from "../TopbarThree/Notification";
import SearchBar from "../TopbarThree/SearchBar";
import SelectLayout from "../TopbarThree/SelectLayout";
import SwitchLanguage from "./SwitchLanguage";

const TopbarFour = () => {
  const { theme } = useTheme();
  return (
    <nav className="bg-[#F7F7FE] dark:bg-bg3 shadow-md w-full mx-auto fixed z-40">
      <div
        className={`px-3 py-3 duration-300 navbar-top z-30 max-w-[1850px] w-full mx-auto md:py-4 xl:py-6 gap-3 flex justify-between items-center`}>
        <div className="flex items-center gap-4 xxl:gap-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                width={174}
                height={38}
                src={
                  theme == "dark"
                    ? "/images/logo-with-text-dark.png"
                    : "/images/logo-with-text.png"
                }
                alt="logo"
                className="hidden lg:block"
              />
            </Link>
          </div>
          <SelectLayout />
          <SearchBar />
        </div>
        <div className="flex items-center gap-3 lg:gap-4 xxl:gap-6">
          <ModeSwitcher />
          <Notification />
          <MessageBtn />
          <SwitchLanguage />
          <Profile />
        </div>
      </div>
      <HorizontalMenu />
    </nav>
  );
};

export default TopbarFour;
