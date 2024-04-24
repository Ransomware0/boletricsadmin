import MobileSearch from "@/components/shared/MobileSearch";
import { useLayout } from "@/utils/LayoutContext";
import { Dispatch, SetStateAction } from "react";
import SelectLayout from "../TopbarOne/SelectLayout";
import MessageBtnTwo from "./MessageBtnTwo";
import ModeSwitcherTwo from "./ModeSwitcherTwo";
import NotificationTwo from "./NotificationTwo";
import ProfileTwo from "./ProfileTwo";
import SearchBarTwo from "./SearchBarTwo";
import SwitchLanguageTwo from "./SwitchLanguageTwo";

const TopBarTwo = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const { layout } = useLayout();
  return (
    <nav
      className={`px-4 xxl:px-6 py-3 shadow-sm duration-300 dark:border-b dark:border-n700 navbar-top z-20 ${
        sidebarIsOpen && layout == "Two Column"
          ? "w-full xxxl:w-[calc(100%-360px)] xl:w-[calc(100%-280px)] xxxl:ltr:ml-[360px] xl:ltr:ml-[280px] xxxl:rtl:mr-[360px] xl:rtl:mr-[280px]"
          : "w-full"
      }   md:py-4 xxxl:py-6 gap-3 bg-n0 dark:bg-bg4 fixed flex justify-between items-center`}>
      <div className="flex whitespace-nowrap gap-4 xxl:gap-6 items-center">
        <button onClick={() => setSidebar(!sidebarIsOpen)}>
          <i className="las la-bars text-2xl"></i>
        </button>
        <SelectLayout />
      </div>
      <div className="flex shrink-0 grow items-center justify-end gap-3 sm:gap-4 xxl:gap-6">
        <MobileSearch />
        <SearchBarTwo />
        <NotificationTwo />
        <MessageBtnTwo />
        <SwitchLanguageTwo />
        <ModeSwitcherTwo />
        <ProfileTwo />
      </div>
    </nav>
  );
};

export default TopBarTwo;
