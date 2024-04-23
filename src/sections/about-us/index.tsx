import sun from "../../assets/sun.svg";
import { motion } from "framer-motion";

const ourMission = [
  {
    text: "To provide clean, efficient, and affordable renewable energy solutions to our customers.",
  },
  {
    text: "To promote the widespread adoption of renewable energy and increase energy independence.",
  },
  {
    text: "To stay at the forefront of renewable energy technology and offer cutting-edge solutions.",
  },
];

export const AboutUs = (props: any) => {
  const { aboutUsRef } = props;
  return (
    <div
      ref={aboutUsRef}
      className="px-[1em] lg:px-[8em] flex flex-col md:flex-row py-[4em] gap-[3em] text-dark"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", delay: 0.3 }}
        className="flex gap-[2em] flex-col  flex-1"
      >
        <div className="bg-dark p-[8em] rounded-3xl"></div>
        <div className="bg-dark p-[5em] rounded-3xl">
          <p className="text-[2.5em] text-center text-[rgba(255,255,255,0.9)] ">
            4.8/5
          </p>
          <p className="text-[0.8em] text-center text-[rgba(255,255,255,0.9)] ">
            Ratings from customer
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", delay: 0.3 }}
        className="flex flex-1 flex-col gap-[2em]"
      >
        <div className="flex flex-col gap-[1em]">
          <p className="text-[#0362fc] flex items-center gap-2 text-[0.7em]">
            <span>
              <img src={sun} alt="" />
            </span>
            ABOUT US
          </p>
          <p className="text-[1.7em] md:text-[2.2em] font-large max-w-[500px]">
            Building a Brighter Future, Together
          </p>
          <p className="text-[0.8em]">
            At Mentary, we believe in the power of renewable energy to create a
            more sustainable future. With a passion for clean energy and a
            commitment to our customers, we are dedicated to delivering the best
            possible solutions.
          </p>
        </div>
        <div className="flex flex-col gap-[1em]">
          <p className="font-semibold text-[1.2em]">Our Missions :</p>
          {ourMission.map((item, index) => (
            <p
              className={`text-[0.8em] border p-[1em] rounded-xl ${
                index === 0 ? "bg-blue-500 text-white" : "bg-slate-100"
              }`}
              key={index}
            >
              {item.text}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
