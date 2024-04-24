"use client";
import useDropdown from "@/utils/useDropdown";
import {
  IconLifebuoy,
  IconLogout,
  IconMessage,
  IconSettings,
  IconUser,
  IconLockSquareRounded
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export const profileLinks = [
  {
    icon: <IconUser size={18} />,
    url: "/settings/profile",
    title: "Mi perfil",
  },
  // {
  //   icon: <IconMessage size={18} />,
  //   url: "/private/chat",
  //   title: "Meassages",
  // },
  // {
  //   icon: <IconLifebuoy size={18} />,
  //   url: "/support/help-center",
  //   title: "Help",
  // },
  {
    icon: <IconLockSquareRounded size={18} />,
    url: "/settings/security",
    title: "Seguridad",
  },
  {
    icon: <IconLogout size={18} />,
    url: "/auth/sign-in",
    title: "Cerrar sesión",
  },
];
const Profile = () => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative shrink-0" ref={ref}>
      <div className="cursor-pointer w-10 md:w-12" onClick={toggleOpen}>
        {/* Si no hay imagen de perfil, pone icono de usuario */}
        <button
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full relative bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500`}>
          <i className="las la-user text-2xl"></i>
          {/* <span className="absolute w-5 h-5 flex items-center justify-center text-n0 rounded-full text-xs bg-primary -top-1 -right-1">
          2
        </span> */}
        </button>
        {/* <Image
          src="/images/user-big-4.png"
          className="rounded-full"
          width={48}
          height={48}
          alt="profile img"
        /> */}
      </div>
      <div
        className={`bg-n0 z-20  dark:bg-bg4 ltr:origin-top-right rtl:origin-top-left rounded-md ltr:right-0 rtl:left-0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] absolute top-full duration-300 ${open ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
          }`}>
        <div className="flex flex-col text-center items-center lg:p-4 p-3 border-b dark:border-n500">
          {/* Si no hay imagen de perfil, pone icono de usuario */}
          <svg xmlns="http://www.w3.org/2000/svg" className="bg-gray-200 rounded-full icon icon-tabler icon-tabler-user-circle" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
          {/* <Image
            src="/images/user-big-4.png"
            width={60}
            height={60}
            className="rounded-full"
            alt="profile img"
          /> */}
          <h6 className="h6 mt-2">William James</h6>
          <span className="text-sm">james@mail.com</span>
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

export default Profile;
