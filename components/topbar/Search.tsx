"use client";
import useDropdown from "@/utils/useDropdown";
import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";

const Search = () => {
  const { open, ref, toggleOpen } = useDropdown();

  useEffect(() => {
    const handleKeyboardPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key == "k") {
        event.preventDefault();
        toggleOpen();
      }
    };
    document.addEventListener("keydown", handleKeyboardPress);

    return () => {
      document.removeEventListener("keydown", handleKeyboardPress);
    };
  }, [toggleOpen]);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggleOpen}
        className="p-1.5 sm:p-2 lg:p-3 border rounded-full bg-n0 dark:bg-bg4 border-n30 dark:border-n500">
        <IconSearch />
      </button>
      <div
        className={`bg-n0 z-10 p-3 sm:p-4 border dark:border-n500 dark:bg-bg4 sm:w-[450px] rounded-md -right-[150px] sm:right-0 shadow-lg absolute top-[105%] duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}>
        <form className="flex gap-4 items-center">
          <input
            type="text"
            className="p-2 border w-full border-n30 bg-transparent dark:bg-bg3 dark:border-n500 rounded-md"
            placeholder="Search ..."
          />{" "}
          <button className="btn rounded-lg py-2 px-4">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
