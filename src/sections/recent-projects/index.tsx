import sun from "../../assets/sun.svg";

export const RecentProject = () => {
  return (
    <div className="flex flex-col px-[1em] lg:px-[8em] text-dark py-[4em] gap-[2em]">
      <div className="flex flex-col gap-[1em]">
        <p className="text-[#0362fc] flex gap-2 text-[0.7em]">
          <span>
            <img src={sun} alt="" />
          </span>
          OUR SERVICES
        </p>
        <p className="text-[1.7em] md:text-[2.2em] font-large max-w-[500px]">
          Recent Projects
        </p>
      </div>
      <div className="flex flex-col gap-[1em]">
        <div className="flex flex-col gap-[1em] md:flex-row">
          <div className="py-[8em] px-[4em] bg-dark rounded-lg flex-grow "></div>
          <div className="py-[8em] px-[4em] bg-dark rounded-lg flex-grow"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-[1em]">
          <div className="py-[5em] px-[2em] bg-dark rounded-lg flex-1"></div>
          <div className="py-[5em] px-[2em] bg-dark rounded-lg flex-1"></div>
          <div className="py-[5em] px-[2em] bg-dark rounded-lg flex-1"></div>
        </div>
      </div>
    </div>
  );
};
