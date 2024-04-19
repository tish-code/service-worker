import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import { Link } from "react-router-dom";
import { INav, IProps } from "./types";

const navigations: INav[] = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About us" },
  { route: "/services", name: "Services" },
];

export const TopNav = (props: IProps) => {
  const { onNavOpen, navMethods } = props;
  return (
    <div className="sticky flex flex-auto items-center justify-between text-primary top-0 inset-x-0 py-4 px-[1em] lg:px-[8em] bg-primary z-40">
      <Link to={"/"} className="font-bold text-[1.2em]">
        SOLAR<span className="text-[#FDB813]">ONE</span>
      </Link>
      <div className="hidden lg:flex justify-between">
        <div className="flex">
          {navigations.map((item: INav, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  item.name === "Home"
                    ? navMethods.toHome()
                    : item.name === "About us"
                    ? navMethods.toAbout()
                    : navMethods.toServices();
                }}
              >
                <div
                  className={`mr-[40px] pb-2 transition-all duration-500 border-b-2 border-transparent hover:border-blue-200`}
                >
                  {item.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <button
        className="hidden lg:flex items-center text-secondary p-2 bg-blue-50 rounded-md font-medium cursor-pointer bg-opacity-95 hover:bg-opacity-100 transition-all"
        onClick={navMethods.toServices}
      >
        <span>Contact us</span>
        <svg className="text-secondary w-[1.3em] h-[1em] inline-block cursor-pointer ml-2">
          <ArrowRightIcon />
        </svg>
      </button>
      <button className="lg:hidden" onClick={onNavOpen}>
        <svg className="text-white w-[2em] h-[2em] inline-block cursor-pointer">
          <Bars3Icon />
        </svg>
      </button>
    </div>
  );
};
