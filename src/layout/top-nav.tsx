import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import { Link, useLocation } from "react-router-dom";

interface INav {
  route: string;
  name: string;
}
const navigation: INav[] = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About us" },
  { route: "/services", name: "Services" },
];

export const TopNav = () => {
  const location = useLocation();
  return (
    <div className="sticky flex flex-auto items-center justify-between text-primary top-0 inset-x-0 py-4 px-4 lg:px-16 bg-[#0a50c9]">
      <div className="font-bold text-[1.2em]">
        SOLAR<span className="text-[#FDB813]">ONE</span>
      </div>
      <div className="hidden lg:flex justify-between">
        <div className="flex">
          {navigation.map((item: INav, index) => {
            const isCurrentpage = item.route === location.pathname;
            return (
              <div key={index}>
                <Link to={item.route}>
                  <div
                    className={`mr-[40px] pb-2 transition-all ${
                      isCurrentpage
                        ? "border-b-2 border-blue-100 font-semibold"
                        : "border-b-2 border-transparent hover:border-blue-300"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden lg:flex items-center text-secondary p-2 bg-blue-50 rounded-md font-medium cursor-pointer hover:bg-opacity-80 transition-all">
        <span>Contact us</span>
        <svg className="text-secondary w-[1.3em] h-[1em] inline-block cursor-pointer ml-2">
          <ArrowRightIcon />
        </svg>
      </div>
      <svg className="text-white w-[2em] h-[2em] inline-block cursor-pointer lg:hidden">
        <Bars3Icon />
      </svg>
    </div>
  );
};
