import { INav } from "./types";
import { motion, AnimatePresence } from "framer-motion";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

const navigations: INav[] = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About us" },
  { route: "/services", name: "Services" },
  { route: "/contact-us", name: "Contact" },
];

interface IProps {
  onNavClose: () => void;
  open: boolean;
  navMethods: any;
}
export const SideNav = (props: IProps) => {
  const { onNavClose, open } = props;

  return (
    <>
      {
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed top-0 right-0 flex flex-col w-[240px] h-full bg-primary p-2 text-primary lg:hidden z-50"
              initial={{
                right: -250,
              }}
              animate={{
                right: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              exit={{
                right: -250,
              }}
            >
              <button onClick={onNavClose} className="ml-auto mb-2 p-2">
                <svg className=" w-[2em] h-[2em] inline-block cursor-pointer">
                  <XMarkIcon />
                </svg>
              </button>
              {navigations.map((item: INav, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      item.name === "Home"
                        ? props.navMethods.toHome()
                        : item.name === "About us"
                        ? props.navMethods.toAbout()
                        : item.name === "Services"
                        ? props.navMethods.toServices()
                        : props.navMethods.toContact();

                      onNavClose();
                    }}
                    className={`mb-2 p-2 text-left transition-all duration-500 rounded-md hover:bg-blue-700`}
                  >
                    <div>{item.name}</div>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      }
    </>
  );
};
