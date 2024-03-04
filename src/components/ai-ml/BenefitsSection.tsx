import { twMerge } from "tailwind-merge";

type BenefitsSectionProps = {
  cards: Array<{
    title: string;
    description: string;
    icon: { url: string };
  }>;
};

function BenefitsSection({ cards }: BenefitsSectionProps) {
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="benefits"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Benefits of{" "}
          <span className="grad">AI/ML and Predictive Analytics</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="w-full bg-Gray/10 p-4 h-[170px] hidden md:block"></div>
          <div className="w-full bg-Gray/5  p-4 h-[170px] hidden md:block"></div>
          <div className="w-full bg-Gray/5  p-4 h-[170px] col-start-1 col-end-2 row-start-2 row-end-3 hidden md:block"></div>
          {cards.map(({ title, icon, description }, i) => (
            <div
              key={i}
              className={twMerge(
                "w-full flex flex-col justify-between odd:bg-customNeutral even:bg-Gray p-4 h-full md:h-[170px] relative group",
                i === 0 && "md:even:bg-customNeutral"
              )}
            >
              <div className="text-lg md:text-2xl">{title}</div>
              <div className="md:absolute group-hover:opacity-100 md:opacity-0 md:w-full md:h-full md:bg-black md:p-4 transition-opacity text-white md:top-0 md:left-0">
                {description}
              </div>
              {!!icon && (
                <img
                  src={icon.url}
                  alt={title}
                  width={40}
                  height={40}
                  className="ml-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BenefitsSection;
