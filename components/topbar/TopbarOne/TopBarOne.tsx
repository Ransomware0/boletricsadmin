import MobileSearch from "@/components/shared/MobileSearch";
import { useLayout } from "@/utils/LayoutContext";
import { Dispatch, SetStateAction } from "react";
import MessageBtn from "./MessageBtn";
import ModeSwitcher from "./ModeSwitcher";
import Notification from "./Notification";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import SelectLayout from "./SelectLayout";
import SwitchLanguage from "./SwitchLanguage";

const TopBarOne = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const { layout } = useLayout();
  return (
    <nav
      className={`ltr:pr-4 xxl:ltr:pr-6 rtl:pl-4 rtl:xxl:pl-6 py-3 xl:py-4 xxxl:py-6 shadow-sm duration-300 dark:border-b dark:border-n700 navbar-top z-20  ${
        sidebarIsOpen && layout == "Vertical"
          ? "w-full xl:ltr:w-[calc(100%-280px)] xxxl:ltr:w-[calc(100%-336px)] xl:ltr:ml-[280px] xxxl:ltr:ml-[336px] xl:rtl:w-[calc(100%-280px)] xxxl:rtl:w-[calc(100%-336px)] xl:rtl:mr-[280px] xxxl:rtl:mr-[336px]"
          : "w-full"
      }  gap-3 bg-n0 dark:bg-bg4 fixed flex justify-between items-center`}>
      <div className="flex grow gap-4 xxl:gap-6 items-center">
        <button
          onClick={() => setSidebar(!sidebarIsOpen)}
          className="text-gray-500 bg-gray-100 rounded-s-2xl text-xl px-0.5 flex items-center py-2.5 ml-2">
          <i className="las la-angle-left text-lg"></i>
        </button>
        {/* <SelectLayout /> */}
        {/* <SearchBar /> */}
      </div>
      <div className="flex items-center gap-3 sm:gap-4 xxl:gap-6">
        <MobileSearch />
        <ModeSwitcher />
        <Notification />
        {/* <MessageBtn /> */}
        {/* <SwitchLanguage /> */}
        <Profile />
      </div>
    </nav>
  );
};

export default TopBarOne;
