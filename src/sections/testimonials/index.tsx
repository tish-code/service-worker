import sun from "../../assets/sun.svg";
import { FiveStar } from "../../components/FiveStar";

const testimonials = [
  {
    title: "Efficient and Proffessional Team",
    text: "I was very impressed with the solar panel installation process. The team was efficient, professional, and always kept me informed of the progress. They did an excellent job and I would highly recommend them to anyone looking for a quality solar panel installation.",
    customer: "Sarah Johnson",
  },
  {
    title: "Smooth and Hassle-Free Process!",
    text: "The solar panel installation process was smooth and hassle-free. The team was very professional and took care of everything, so I didn't have to worry about a thing. I highly recommend this company to anyone looking for a quality solar panel installation.",
    customer: "Richard Wilson",
  },
  {
    title: "Excellent Customer Service from SolarOne!",
    text: "The customer service I received from the solar panel company was exceptional. They were always available to answer my questions and made sure I was completely satisfied with the final result. I'm so happy with my new solar panels and I'm saving a lot on my energy bills.",
    customer: "David Brown",
  },
  {
    title: "Top-notch Workmanship from SolarOne!",
    text: "I was extremely impressed with the quality of the solar panel installation. The workmanship was top-notch and the panels look great on my roof. I would highly recommend this company to anyone looking for a high-quality solar panel installation.",
    customer: "Jane Doe",
  },
  {
    title: "Affordable and Reliable Services!",
    text: "I was looking for a solar panel company that was affordable and reliable, and I found both with this company. The installation was completed on time and within budget, and the panels are working great. I would definitely use this company again.",
    customer: "Michael Smith",
  },
  {
    title: "Eco-friendly and Convenient Product!",
    text: "I wanted to switch to solar panels because I wanted to be more eco-friendly and save money on my energy bills. This company made the process so convenient, and now I have clean energy powering my home. I couldn't be happier.",
    customer: "Emily Davis",
  },
];

export const Testimonials = () => {
  return (
    <div className="px-[1em] lg:px-[8em] bg-[#39414d] py-[4em] flex flex-col gap-[2em]">
      <div className="flex flex-col gap-[1em] items-center">
        <div className="text-[#0362fc] text-[0.7em] flex items-center">
          <div className="flex mr-2 items-center">
            <img src={sun} alt="" />
          </div>
          <p>TESTIMONIAL</p>
        </div>
        <p className="text-[1.7em] md:text-[2.2em] font-large max-w-[500px] text-center">
          Happy Customers, Happy World
        </p>
      </div>
      <div className="flex flex-col gap-[2em]">
        <div className="flex flex-col md:flex-row gap-[1em]">
          {testimonials.map((item, index) => {
            return (
              index < 3 && (
                <div
                  key={index}
                  className="flex flex-col gap-[0.6em] p-[1em] rounded-lg flex-1 bg-[#515861]"
                >
                  <div>
                    <FiveStar />
                  </div>
                  <p className=" font-semibold">{item.title}</p>
                  <p className="text-[0.8em]">{item.text}</p>
                  <p className="text-[#4cf746]">{item.customer}</p>
                </div>
              )
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-[1em]">
          {testimonials.map((item, index) => {
            return (
              index > 2 && (
                <div
                  key={index}
                  className="flex flex-col gap-[0.6em] p-[1em] rounded-lg flex-1 bg-[#515861]"
                >
                  <div>
                    <FiveStar />
                  </div>
                  <p className=" font-semibold">{item.title}</p>
                  <p className="text-[0.8em]">{item.text}</p>
                  <p className="text-[#4cf746]">{item.customer}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
