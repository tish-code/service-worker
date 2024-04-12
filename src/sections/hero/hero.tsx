import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-blue-400 bg-hero-small md:bg-hero-large bg-cover bg-center">
      <div
        id="overlay"
        className="bg-gradient-to-b from-[#0a50c9] via-[rgba(96,117,209,0.9)] to-[rgba(224,224,224,0.2)] h-full w-full pt-[2em] pb-[10em] px-[1em] lg:px-[8em]"
      >
        <div className="flex  flex-col">
          <div className="flex justify-between mb-[2em]">
            <p className="text-[0.7em] tracking-widest ">
              SOLAR<span className="text-[#FDB813]">ONE</span> - SOLAR &
              RENEWABLE ENERGY
            </p>
            <p className="hidden text-[0.7em] tracking-widest md:flex">
              Best Quality Renewable Energy
            </p>
          </div>
          <div className="lg:px-[4em] flex md:justify-center mb-[4em]">
            <p className="text-[1.7em] md:text-[2.5em] max-w-[15em] font-large">
              Powering a Sustainable Future, One Panel at a Time.
            </p>
          </div>
          <div className="max-w-[30em] text-[1em]">
            <p className="mb-[2em]">
              We believe in a future powered by clean, renewable energy. Empower
              Your Future with Solar Energy. Join the Renewable Revolution
              Today.
            </p>
            <div className="flex flex-wrap transition duration-300 gap-4">
              <Link
                to={"/contact-us"}
                className="flex-none items-center py-3 px-4 bg-white text-blue-600 rounded-xl bg-opacity-90 hover:bg-opacity-100"
              >
                Call us Today
              </Link>
              <Link
                to={"/contact-us"}
                className="flex-none items-center py-3 px-4 bg-[#fcbe03] text-white rounded-xl bg-opacity-90 hover:bg-opacity-100"
              >
                Request a call back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
