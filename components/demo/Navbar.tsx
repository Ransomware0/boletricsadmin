"use client";
import logoIconDark from "@/public/images/logo-dark.png";
import logoDark from "@/public/images/logo-with-text-dark.png";
import logo from "@/public/images/logo-with-text.png";
import logoIcon from "@/public/images/logo.png";
import cn from "@/utils/cn";
import { IconArrowUpRight, IconMenu2 } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ModeSwitcher from "../topbar/TopbarThree/ModeSwitcher";
import { demoData } from "./demodata";

// import { demoData } from "./demodata";
type ResultType = {
  id: number;
  title: string;
  img?: StaticImageData;
  bgColor?: string;
  url: string;
};
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<ResultType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const path = usePathname();
  const { theme } = useTheme();
  const router = useRouter();
  const resultsRef = useRef(null);

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  // ... existing code ...

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchResult([]);
      }
    };
    // close search on esc key
    // const handleKeyDown = (event: KeyboardEvent) => {
    //   if (event.key === "Escape") {
    //     setSearchResult([]);
    //   }
    // };
    document.addEventListener("click", handleClickOutside);
    // document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      // document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm.trim()) {
      setSearchResult([]);
      return;
    }
    const result = demoData.filter(
      ({ title, url }) =>
        title.toLowerCase().includes(searchTerm) ||
        url.toLowerCase().includes(searchTerm)
    );
    setSearchResult(result);
  };

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "ArrowUp" && selectedIndex > 0) {
        setSelectedIndex((prevIndex) => prevIndex - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedIndex < searchResult.length - 1
      ) {
        setSelectedIndex((prevIndex) => prevIndex + 1);
      } else if (e.key === "Enter") {
        const selectedLink = searchResult[selectedIndex];
        if (selectedLink) {
          router.push(selectedLink.url);
        }
      }
    };

    const selectedElement = document.getElementById(
      `searchResultItem-${selectedIndex}`
    );
    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, searchResult.length, router, searchResult]);

  return (
    <div
      className={`fixed top-0 w-full max-lg:bg-n0 dark:max-lg:bg-bg4 max-lg:shadow-lg z-10 ${
        scrolled && "bg-n0 dark:bg-bg3 shadow-lg"
      }`}>
      <nav
        className={`container top-0 flex duration-500 justify-between items-center gap-2 py-3 md:py-4 lg:py-6 xxl:py-8 ${
          scrolled && "lg:py-4 xxl:!py-5"
        }`}>
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
          <Link href="/" className="shrink-0">
            <Image
              width={174}
              height={38}
              src={theme == "dark" ? logoDark : logo}
              className="max-xxl:hidden"
              alt="logo"
            />
            <Image
              src={theme == "dark" ? logoIconDark : logoIcon}
              className="xxl:hidden"
              alt="logo"
            />
          </Link>
          <div className="relative" ref={searchContainerRef}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`bg-n0 dark:bg-bg4 shrink-0 ${
                scrolled ? "bg-primary/5 dark:bg-bg4" : "bg-n0 "
              } ${
                path == "/demos" && "bg-primary/5 dark:bg-n900"
              }  flex gap-3 rounded-[30px] border lg:border-none max-md:border-n30 dark:border-n500 lg:border-transparent px-2 items-center justify-between xxl:w-[336px]`}>
              <input
                type="text"
                placeholder="E.g. dashboard, invoice.."
                onFocus={handleSearch}
                onInput={handleSearch}
                className="bg-transparent py-2 xxl:py-3 xl:ltr:pl-4 xl:rtl:pr-4  w-full"
              />
              <button className="bg-primary rounded-full w-8 shrink-0 h-8 flex justify-center items-center text-n0">
                <i className="las la-search text-lg"></i>
              </button>
            </form>
            {searchResult.length > 0 ? (
              <div
                ref={resultsRef}
                className={`absolute top-[110%] left-0 max-h-[350px] overflow-y-auto right-0 p-1 rounded-lg flex flex-col bg-n0 dark:bg-bg4`}>
                {searchResult.map(({ id, title, url }, index) => (
                  <Link
                    key={id}
                    href={url}
                    className={cn(
                      "flex flex-col gap-1 p-2 hover:bg-primary/5 dark:hover:bg-bg3 rounded-lg duration-300",
                      { "bg-primary/5 dark:bg-bg3": index == selectedIndex }
                    )}>
                    <p className="font-medium text-sm xl:text-base">{title}</p>
                    <span className="text-xs">{url}</span>
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <ul
          className={`lg:flex z-20 items-center gap-4 absolute top-full lg:static ${
            menuOpen
              ? "bg-n0 dark:bg-bg4 w-full left-0 right-0 p-4 flex text-start translate-x-0 justify-start max-lg:flex-col"
              : "max-lg:hidden max-lg:-translate-x-full"
          }`}>
          <li>
            <Link href="#pages">Prebuilt Pages</Link>
          </li>
          <li>
            <Link href="#layouts">Layouts</Link>
          </li>
          <li>
            <Link href="#whyus">Why Choose Us</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <ModeSwitcher />
          <Link className="btn max-md:hidden" href="#">
            Buy Bankhub <IconArrowUpRight />
          </Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <IconMenu2 />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
