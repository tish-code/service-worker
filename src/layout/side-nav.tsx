import { INav, IProps } from "./types";
import { motion, AnimatePresence } from "framer-motion";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Link, useLocation } from "react-router-dom";

const navigations: INav[] = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About us" },
  { route: "/services", name: "Services" },
  { route: "/contact", name: "Contact Us" },
];

export const SideNav = (props: IProps) => {
  const location = useLocation();
  const { onNavClose, open } = props;
  return (
    <>
      {
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed top-0 right-0 flex flex-col w-[200px] h-full bg-primary p-2 text-primary lg:hidden"
              initial={{
                right: -210,
              }}
              animate={{
                right: 0,
              }}
              transition={{
                duration: 1,
              }}
              exit={{
                right: -210,
              }}
            >
              <button onClick={onNavClose} className="ml-auto mb-2 p-2">
                <svg className=" w-[2em] h-[2em] inline-block cursor-pointer">
                  <XMarkIcon />
                </svg>
              </button>
              {navigations.map((item: INav, index) => {
                const isCurrentpage = item.route === location.pathname;
                return (
                  <Link
                    to={item.route}
                    key={index}
                    className={`mb-2 p-2 transition-all duration-500 rounded-md ${
                      isCurrentpage
                        ? "bg-blue-700 font-semibold"
                        : " hover:bg-blue-700"
                    }`}
                  >
                    <div>{item.name}</div>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      }
    </>
  );
};
