import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-dark px-[1em] lg:px-[8em] flex flex-col pt-[4em] pb-[2em]">
      <div className="flex flex-col md:flex-row gap-[2em] mb-[2em]">
        <div className="flex-1">
          <div className="leading-[1] mb-[1em]">
            <Link to={"/"} className="font-bold text-[1.4em]">
              SOLAR<span className="text-[#FDB813]">ONE</span>
            </Link>
            <p className="text-[0.6em]">Solar & Renewable Energy</p>
          </div>
          <div>
            <p className="text-[0.8em] text-gray-300">
              At Mentary, we believe in the power of renewable energy to create
              a more sustainable future.
            </p>
          </div>
        </div>
        <div className="flex-1 gap-4 flex flex-col">
          <p className="font-bold text-[1.2em]">Services</p>
          <div className="flex flex-col gap-3">
            <p className="text-[0.8em] text-gray-300">
              Solar Panel Installation
            </p>
            <p className="text-[0.8em] text-gray-300">
              Wind Turbine Installation
            </p>
            <p className="text-[0.8em] text-gray-300">Solar Panel Maintenace</p>
            <p className="text-[0.8em] text-gray-300">
              Energy Efficency Audits
            </p>
          </div>
        </div>
        <div className="flex-1 gap-4 flex flex-col">
          <p className="font-bold text-[1.2em]">Contact Info</p>
          <div className="flex flex-col gap-3">
            <p className="text-[0.8em] text-gray-300">
              Address: 1234 Main St. Anytown, USA 12345
            </p>
            <p className="text-[0.8em] text-gray-300">
              Phone: +1 (333) 000-0000
            </p>
            <p className="text-[0.8em] text-gray-300">hi@solarone.com</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 mb-[1em]"></div>
      <div>
        <p>Copyright © 2024 SolarOne</p>
      </div>
    </div>
  );
};
