"use client";
import Link from "next/link";

const MessageBtnTwo = ({ isWhite }: { isWhite?: boolean }) => {
  return (
    <Link href="/private/chat" className="max-[400px]:hidden">
      <i className="lab la-facebook-messenger"></i>
    </Link>
  );
};

export default MessageBtnTwo;
