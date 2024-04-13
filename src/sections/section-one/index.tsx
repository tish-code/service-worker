import rectangle3 from "../../assets/rectangle3.png";

const stats = [
  { sn: "01/", text: "Collaborate with 100+ leading" },
  { sn: "02/", text: " 100+ leading universities and companies" },
  { sn: "03/", text: " leading universities and companies" },
  { sn: "04/", text: " universities and companies" },
];
export const SectionOne = () => {
  return (
    <div className="px-[1em] lg:px-[8em] text-dark py-[4em] flex flex-col md:flex-row gap-[2em] ">
      <div className="flex flex-col gap-[1.5em] flex-1 lg:pt-[2em]">
        <p className="text-[1.7em] md:text-[2.2em] font-semibold font-large">
          The Friendliest Installers in the West
        </p>
        <p className="text-[0.9em]">
          At Solidarity Solar our aims are to help our customers towards a
          sustainable future and genuinely care about the quality of products we
          use for our installs. We never sell you equipment you don't need and
          will always advise to the best of our ability, No hard sell or pushy
          sales tactics ever. We take pride in our work and do our best to make
          sure that we meet, or exceed, our customers' expectations.
        </p>
        <div className="flex flex-col gap-2">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex gap-2">
                <p className="tracking-[0.2em] text-[#11a60c]">{item.sn}</p>
                <p className="font-semibold tracking-wider">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-1 max-w-[550px]">
        <img src={rectangle3} alt="solar" className="ml-auto h-full w-full" />
      </div>
    </div>
  );
};
