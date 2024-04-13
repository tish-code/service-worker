import sun from "../../assets/sun.svg";
import icon from "../../assets/Icon.svg";

const whatWeOffer = [
  {
    title: "Cost-Effective Solutions",
    text: "Our renewable energy solutions are not only environmentally friendly, but also cost-effective.",
  },
  {
    title: "Advanced Technology",
    text: "We utilize the latest technology in renewable energy to provide the most efficient and effective solutions.",
  },
  {
    title: "Customizable Solutions",
    text: "Every customer has unique energy needs and requirements. That's why we offer customizable renewable energy solutions.",
  },
];

export const WhyChooseUs = () => {
  return (
    <div className="px-[1em] text-dark lg:px-[8em] py-[4em] bg-gray-400 bg-opacity-30 flex flex-col gap-[2em]">
      <div className="flex flex-col gap-[1em]">
        <p className="text-[#0362fc] flex items-center gap-2 text-[0.7em]">
          <span>
            <img src={sun} alt="" />
          </span>
          WHY CHOOSE US
        </p>
        <p className="text-[1.7em] md:text-[2.2em] font-large max-w-[500px]">
          A Positive Impact for Your Home and the Planet
        </p>
      </div>
      <div className="flex flex-col gap-[1em] md:flex-row">
        {whatWeOffer.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-[0.7em] flex-1">
              <img src={icon} alt="" className="w-[3em]" />
              <p className="font-semibold text-[1.1em]">{item.title}</p>
              <p className="text-[0.9em]">{item.text}</p>
            </div>
          );
        })}
      </div>
      <div
        className="border hidden lg:flex 
        border-[#a1a1a1]"
      ></div>
    </div>
  );
};
