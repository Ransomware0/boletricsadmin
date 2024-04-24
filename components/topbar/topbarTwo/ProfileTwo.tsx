"use client";
import useDropdown from "@/utils/useDropdown";
import Image from "next/image";
import Link from "next/link";
import { profileLinks } from "../TopbarOne/Profile";

const ProfileTwo = () => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div
      className="relative shrink-0 md:ltr:border-l-2 md:rtl:border-r-2 border-primary/20 border-dashed"
      ref={ref}>
      <div
        className="cursor-pointer md:ltr:ml-5 md:rtl:mr-5 flex items-center gap-2"
        onClick={toggleOpen}>
        <Image
          src="/images/user-1.png"
          className="rounded-full shrink-0 w-10 md:w-12"
          width={48}
          height={48}
          alt="profile img"
        />
        <div className="max-xxl:hidden flex shrink-0 items-center gap-2">
          <div>
            <h5 className="font-medium text-lg">Jenus Ana</h5>
            <span className="text-sm">Teacher</span>
          </div>
          <i className="las la-angle-down text-lg"></i>
        </div>
      </div>
      <div
        className={`bg-n0 z-20  dark:bg-bg4 rounded-md ltr:origin-top-right rtl:origin-top-left xxl:rtl:origin-top xxl:ltr:origin-top ltr:right-0 rtl:left-0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] absolute top-full duration-300 ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"
        }`}>
        <div className="flex flex-col text-center items-center lg:p-4 p-3 border-b dark:border-n500">
          <Image
            src="/images/user-1.png"
            width={60}
            height={60}
            className="rounded-full"
            alt="profile img"
          />
          <h6 className="h6 mt-2">Jenus Ana</h6>
          <span className="text-sm">jenus@mail.com</span>
        </div>
        <ul className="flex flex-col w-[250px] p-4">
          {profileLinks.map(({ icon, title, url }) => (
            <li key={title}>
              <Link
                href={url}
                className="flex items-center gap-2 p-2 rounded-md duration-300 hover:bg-primary hover:text-n0">
                <span>{icon}</span>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileTwo;
