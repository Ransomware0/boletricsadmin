"use client";
import OptionsVertical from "@/components/shared/OptionsVertical";
import { friends } from "@/public/data/friends";
import useWindowSize from "@/utils/useWindowSize";
import {
  IconCamera,
  IconCirclePlus,
  IconMicrophone,
  IconMoodSmile,
  IconPencil,
  IconPhone,
  IconSearch,
  IconSend,
  IconUsers,
  IconVideo,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const Chat = () => {
  const [currentChat, setCurrentChat] = useState(1);
  const [allfriends, setAllFriends] = useState(friends);
  const [openMenu, setOpenMenu] = useState(false);
  const [message, setMessage] = useState("");
  const { windowSize } = useWindowSize();
  useEffect(() => {
    const scrollableSection = document.getElementById("chatbox");
    if (scrollableSection) {
      scrollableSection.scrollTop = scrollableSection.scrollHeight;
    }
  }, [allfriends]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let currentMsg = {
      message,
      person: "you",
    };
    const updatedFriends = allfriends.map((friend) => {
      if (friend.id === currentChat) {
        return {
          ...friend,
          messages: [...friend.messages, currentMsg],
        };
      }
      return friend;
    });
    setAllFriends(updatedFriends);
    setMessage("");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(true);
      }
      if (window.innerWidth < 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="md:hidden flex items-center gap-2 min-w-max py-2 px-3 relative z-[3] rounded-lg bg-primary text-n0">
        <IconUsers size={20} className="shrink-0" /> <span>Contacts</span>
      </button>
      <div
        onClick={() => setOpenMenu(false)}
        className={`absolute md:hidden md:invisible inset-0 z-[2] ${
          openMenu ? "block visible" : "hidden invisible"
        }`}></div>
      <div className="rounded-2xl bg-n0 dark:bg-bg4 shadow-3 grid grid-cols-12 relative max-md:mt-3">
        <div
          className={`p-2 sm:p-4 duration-500 md:p-6 xl:p-8 max-md:w-[280px] max-md:max-h-[600px] max-md:overflow-y-auto max-md:rounded-xl max-md:absolute max-md:left-0 z-[3] max-md:bg-n0 max-md:dark:bg-bg4 max-md:top-0 md:col-span-5 xxl:col-span-4 md:border-r border-n30 dark:border-n500 ${
            openMenu
              ? "max-md:translate-x-0 max-md:visible max-md:opacity-100"
              : "max-md:-translate-x-[120%] max-md:opacity-0 max-md:invisible"
          }`}>
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0">
              <Image
                width={60}
                height={60}
                src="/images/user.png"
                alt="image"
                className="w-full h-full object-fit-cover"
              />
            </div>
            <div className="flex gap-3 items-center justify-content-end flex-wrap">
              <button className="inline-block shrink-0 hover:text-primary">
                <IconPencil />
              </button>
              <OptionsVertical />
            </div>
          </div>
          <form className="flex items-center p-2 border border-n30 dark:border-n500 bg-secondary1/5 dark:bg-bg3 rounded-full my-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full  lg:px-6 bg-transparent border-0"
            />
            <button
              type="button"
              className="grid place-content-center  w-10 h-10 rounded-full border-0 bg-primary text-white shrink-0">
              <IconSearch className="h-5 w-5" />
            </button>
          </form>
          <div
            className="max-h-[600px] overflow-y-auto scrollbar-hidden mt-5 md:mt-0"
            style={{ overflowY: "auto" }}>
            <ul className="flex flex-col gap-2">
              {allfriends.map((friend) => {
                const { id, img, message, name, time, badge } = friend;
                return (
                  <li
                    key={id}
                    onClick={() => {
                      setCurrentChat(id);
                      windowSize! < 768 && setOpenMenu(false);
                    }}>
                    <div
                      className={`flex flex-wrap items-center cursor-pointer gap-4 p-2 justify-center md:justify-start rounded-lg hover:bg-secondary1/10 ${
                        currentChat == friend.id && "bg-secondary1/20"
                      } duration-300`}>
                      <div className="md:w-11 md:h-11 w-8 h-8 relative z-[1] rounded-full shrink-0">
                        <Image
                          width={44}
                          height={44}
                          src={img}
                          alt="image"
                          className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                        />
                        {badge && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary3dark absolute right-1 bottom-1 z-[1]"></span>
                        )}
                      </div>
                      <div className="flex-grow flex items-center justify-between gap-4">
                        <div className="flex-grow">
                          <p className="font-semibold mb-1"> {name} </p>
                          <span className="block text-xs">{message}</span>
                        </div>
                        <div className="shrink-0 inline-block text-center">
                          {badge && (
                            <div className="grid place-content-center w-6 h-6 rounded-full bg-primary text-white">
                              <span className="text-sm lh-1">{badge}</span>
                            </div>
                          )}
                          <span
                            className={`inline-block text-xs ${
                              badge && "text-primary"
                            }`}>
                            {time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 xxl:col-span-8">
          <div className="chat-box__content-head p-4 md:p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 relative z-[1] rounded-full shrink-0">
                  <Image
                    width={60}
                    height={60}
                    src={allfriends[currentChat - 1].img}
                    alt="image"
                    className="rounded-full"
                  />
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary3dark absolute right-0.5 bottom-0.5 z-[1]"></span>
                </div>
                <h5 className="flex-grow">
                  {allfriends[currentChat - 1].name}
                </h5>
              </div>
              <div className="flex gap-3 items-center justify-content-end flex-wrap">
                <Link
                  href="#"
                  className="inline-block shrink-0 hover:text-primary">
                  <IconPhone className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="inline-block shrink-0 hover:text-primary">
                  <IconVideo className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div
            id="chatbox"
            className="max-h-[640px] md:min-h-[620px] scrollbar-hidden bg-secondary1/5 dark:bg-bg3 p-4 md:p-6 xl:py-8 overflow-y-auto mx-3 lg:mx-6 rounded-2xl">
            <ul className="flex flex-col justify-end">
              {allfriends.map(
                (friend) =>
                  friend.id == currentChat &&
                  friend.messages.map(({ message, person }, i) => (
                    <li key={i}>
                      <div
                        className={`flex flex-col items-start ${
                          person == "you" ? "items-end" : "items-start"
                        }`}>
                        {person == "self" && (
                          <div className="w-8 h-8 xl:w-12 xl:h-12 md:mb-2">
                            <Image
                              width={48}
                              height={48}
                              src={friend.img}
                              alt="image"
                              className="rounded-full "
                            />
                          </div>
                        )}

                        <div
                          className={`bg-n0  dark:bg-bg4 rounded-lg py-2 xxl:py-3 px-3 xxl:px-5 md:max-w-[55%] my-2 relative ${
                            person == "you"
                              ? "md:arrow-bottom bg-primary dark:bg-primary text-n0"
                              : "md:arrow-top"
                          }`}>
                          <p className="text-sm md:text-base">{message}</p>
                        </div>
                        {person == "you" && (
                          <div className="w-8 h-8 xl:w-12 xl:h-12 md:mb-2">
                            <Image
                              width={48}
                              height={48}
                              src="/images/user.png"
                              alt="image"
                              className="rounded-full md:my-2"
                            />
                          </div>
                        )}
                      </div>
                    </li>
                  ))
              )}
            </ul>
          </div>
          <div className="p-4 flex items-center max-[479px]:flex-wrap gap-4">
            <div className="flex items-center justify-between max-w-[150px] gap-4 shrink-0">
              <div className="shrink-0">
                <label
                  htmlFor="file"
                  className="inline-block hover:text-primary cursor-pointer">
                  <input type="file" name="file" id="file" className="hidden" />
                  <IconCirclePlus className="w-6 h-6" />
                </label>
              </div>
              <div className="shrink-0">
                <button className="inline-block hover:text-primary">
                  <IconMicrophone className="w-6 h-6" />
                </button>
              </div>
              <div className="shrink-0">
                <label
                  htmlFor="img"
                  className="inline-block hover:text-primary">
                  <input type="file" name="img" id="img" className="hidden" />
                  <IconCamera className="w-6 h-6" />
                </label>
              </div>
              <div className="shrink-0">
                <button className="inline-block hover:text-primary">
                  <IconMoodSmile className="w-6 h-6" />
                </button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center flex-grow p-1 md:p-2 border border-n30 dark:border-n500 bg-secondary1/5 dark:bg-bg3 rounded-full">
              <input
                type="text"
                placeholder="Type message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent  px-3 md:px-6 border-0 flex-grow"
              />
              <button
                type="submit"
                className="grid place-content-center w-8 md:w-10 h-8 md:h-10 rounded-full border-0 bg-primary text-white shrink-0">
                <IconSend className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
