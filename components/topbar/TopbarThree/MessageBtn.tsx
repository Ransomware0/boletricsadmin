"use client";
import Link from "next/link";

const MessageBtn = ({ isWhite }: { isWhite?: boolean }) => {
  return (
    <Link
      href="/private/chat"
      className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full relative bg-n0 dark:bg-bg4 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)]`}>
      <i className="lab la-facebook-messenger"></i>
      <span className="absolute w-5 h-5 text-n0 flex items-center justify-center rounded-full text-xs bg-primary -top-1 -right-1">
        2
      </span>
    </Link>
  );
};

export default MessageBtn;
