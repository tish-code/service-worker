import { Link } from "react-router-dom";
import sun from "../../assets/sun.svg";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";

const services = [
  {
    title: "Solar Panel Installation",
    text: "Our team of experienced technicians will install high-quality solar panels on your property to provide clean, renewable energy.",
  },
  {
    title: "Wind Turbine Installation",
    text: "We offer installation services for wind turbines to help you generate energy from the wind. Our turbines are designed to be efficient.",
  },
  {
    title: "Solar Panel Maintenance",
    text: "To keep your solar panels functioning at peak efficiency, we offer cleaning and maintenance services to keep them free of dirt and debris.",
  },
];

const strides = [
  { title: "10+", text: "Years of Experience" },
  { title: "4.8/5", text: "Ratings from Customers" },
  { title: "20+", text: "Country Served" },
  { title: "1.3k", text: "Successful Installations" },
];
export const OurServices = ({ serviceRef }: any) => {
  return (
    <div
      className="px-[1em] lg:px-[8em] bg-dark py-[4em] flex flex-col gap-[2em]"
      ref={serviceRef}
    >
      <div className="flex flex-col gap-[1.5em]">
        <p className="text-[#0362fc] flex items-center gap-2 text-[0.7em] m-auto">
          <span>
            <img src={sun} alt="" />
          </span>
          OUR SERVICES
        </p>
        <p className="text-[1.7em] md:text-[2.2em] font-large max-w-[500px] text-center m-auto">
          Comprehensive Renewable Energy Solutions
        </p>
        <p className="text-center text-[0.9em] max-w-[500px] m-auto">
          We offer a range of services to help you take advantage of renewable
          energy and reduce your carbon footprint.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[2em]">
        {services.map((item, index) => {
          return (
            <div className="flex flex-col flex-1 gap-[1em]" key={index}>
              <div className="p-[6em] rounded-3xl bg-gray-700"></div>
              <p className="font-semibold text-[1.1em]">{item.title}</p>
              <p className="text-[0.8em]">{item.text}</p>
              <div>
                <Link
                  to={"/"}
                  className="text-[0.9em] tracking-wider text-[#4cf746] flex items-center gap-[0.8em]"
                >
                  <p className="tracking-wider py-[1em]">Learn More</p>
                  <div className="py-[0.8em] px-[0.7em] rounded-md bg-gray-700">
                    <svg className="w-[1em] h-[1em]">
                      <ArrowRightIcon />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex border border-gray-500"></div>
      <div className="flex flex-col md:flex-row gap-[2em]">
        {strides.map((item, index) => {
          const isIndex = index === 1;
          return (
            <div
              key={index}
              className={`text-dark px-[2em] py-[3em] flex-1 rounded-lg ${
                isIndex ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              <p className="text-center text-[2em]">{item.title}</p>
              <p className="text-center text-[0.7em]">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
