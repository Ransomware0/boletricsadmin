import cn from "@/utils/cn";
import { ReactNode, useEffect } from "react";

const Modal = ({
  children,
  toggleOpen,
  open,
  height,
  width,
}: {
  toggleOpen: () => void;
  open: boolean;
  children: ReactNode;
  height?: string;
  width?: string;
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);
  return (
    <div
      onClick={toggleOpen}
      className={cn(
        "inset-0 fixed z-[99] bg-n900/80 opacity-0 invisible duration-500 overflow-y-auto ",
        { "visible opacity-100": open }
      )}>
      <div className={`overflow-y-scroll ${height ? height : "h-full"}`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "absolute left-1/2 duration-300 max-w-[710px] my-10 modal scale-75 w-[95%] -translate-x-1/2 box xl:p-8 translate-y-20 opacity-0",
            { "translate-y-0 scale-100 opacity-100 my-10": open },
            width
          )}>
          <div className="relative">
            <button
              onClick={toggleOpen}
              className="absolute top-0 ltr:right-0 rtl:left-0">
              <i className="las la-times"></i>
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
