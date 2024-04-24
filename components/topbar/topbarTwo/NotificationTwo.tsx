"use client";
import useDropdown from "@/utils/useDropdown";
import Image from "next/image";
import Link from "next/link";
const notifications = [
  {
    id: 1,
    name: "Benjamin ",
    img: "/images/user-3.png",
    activity: "Sent a message",
    time: "1 hour ago",
  },
  {
    id: 2,
    name: "William ",
    img: "/images/user-4.png",
    activity: "Left a comment",
    time: "2 hour ago",
  },
  {
    id: 3,
    name: "Samuel",
    img: "/images/user-5.png",
    activity: "Left a comment",
    time: "3 hour ago",
  },
  {
    id: 4,
    name: "Scott",
    img: "/images/user-7.png",
    activity: "Uploaded a file",
    time: "Yesterday",
  },
  {
    id: 5,
    name: "David",
    img: "/images/user-4.png",
    activity: "Left a comment",
    time: "Yesterday",
  },
];
const NotificationTwo = () => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggleOpen}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full relative bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500`}>
        <i className="las la-bell text-2xl"></i>
      </button>
      <div
        className={`bg-n0 dark:bg-bg4 rounded-md origin-[25%_0] sm:ltr:origin-top-right sm:rtl:origin-top-left rtl:-left-[170px] ltr:-right-[208px] sm:ltr:right-0 sm:rtl:left-0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] absolute top-full duration-300 ${
          open ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
        }`}>
        <div className="flex justify-between items-center lg:px-4 p-3 border-b dark:border-n500">
          <h5 className="h5">Notifications</h5>
          <Link href="#" onClick={toggleOpen} className="text-primary">
            View All
          </Link>
        </div>
        <ul className="flex flex-col w-[310px] p-4">
          {notifications.map(({ id, activity, img, name, time }) => (
            <div
              key={id}
              className="flex gap-2 cursor-pointer p-2 rounded-md hover:bg-primary/10 duration-300">
              <Image
                src={img}
                width={44}
                height={40}
                className="rounded-full shrink-0"
                alt="img"
              />
              <div className="text-sm">
                <div className="flex gap-1">
                  <span className="font-medium">{name}</span>
                  <span>{activity}</span>
                </div>
                <span className="text-n100 dark:text-n50 text-xs">{time}</span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationTwo;
