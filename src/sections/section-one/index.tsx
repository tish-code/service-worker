const stats = [
  { sn: "01/", text: "Collaborate with 100+ leading" },
  { sn: "02/", text: " 100+ leading universities and companies" },
  { sn: "03/", text: " leading universities and companies" },
  { sn: "04/", text: " universities and companies" },
];
export const SectionOne = () => {
  return (
    <div className="px-[1em] lg:px-[8em] text-dark pt-[4em]">
      <div className="flex flex-col gap-[1.5em]">
        <p className="text-[1.5em] md:text-[2.2em] font-semibold font-large">
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
      <div></div>
    </div>
  );
};
