import MobileSearch from "@/components/shared/MobileSearch";
import { useLayout } from "@/utils/LayoutContext";
import { Dispatch, SetStateAction } from "react";
import ProfileTwo from "../topbarTwo/ProfileTwo";
import MessageBtn from "./MessageBtn";
import ModeSwitcher from "./ModeSwitcher";
import Notification from "./Notification";
import SearchBar from "./SearchBar";
import SelectCurrency from "./SelectCurrency";
import SelectLayout from "./SelectLayout";
import SwitchLanguage from "./SwitchLanguage";

const TopBarThree = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const { layout } = useLayout();
  return (
    <nav
      className={`ltr:pr-4 ltr:xxl:pr-6 rtl:pl-4 rtl:xxl:pl-6 py-3 duration-300 dark:border-b dark:border-n700 navbar-top z-20  ${
        sidebarIsOpen && layout == "Hovered"
          ? "w-full xl:w-[calc(100%-96px)] xl:ltr:ml-24 xl:rtl:mr-24"
          : "w-full"
      }  md:py-4 xl:py-6 gap-3 bg-lightbg2 dark:bg-bg3 fixed flex justify-between items-center`}>
      <div className="flex grow gap-4 xxl:gap-5 items-center">
        <button
          onClick={() => setSidebar(!sidebarIsOpen)}
          className="bg-primary text-n0 rounded-e-2xl flex items-center py-3">
          <i className="las la-angle-left text-xl"></i>
        </button>
        <SelectLayout />
        <SearchBar />
        <SelectCurrency />
      </div>
      <div className="flex items-center gap-3 shrink-0 justify-end sm:gap-4 xxl:gap-5">
        <MobileSearch btnClass="bg-n0 dark:bg-bg4 border-none" />
        <ModeSwitcher />
        <MessageBtn />
        <Notification />
        <SwitchLanguage />
        <ProfileTwo />
      </div>
    </nav>
  );
};

export default TopBarThree;
