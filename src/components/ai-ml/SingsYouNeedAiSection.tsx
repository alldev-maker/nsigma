import { twMerge } from "tailwind-merge";

type SignsYouNeedAiSectionProps = {
  cards: Array<{
    title: string;
    description: string;
    icon: { url: string };
  }>;
};

function SignsYouNeedAiSection({ cards }: SignsYouNeedAiSectionProps) {
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="signs-you-need-ai"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Signs your business could use{" "}
          <span className="grad">AI/ML and Predictive Analytics</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cards.map(({ title, icon, description }, i) => (
            <div
              key={i}
              className={twMerge(
                "w-full flex flex-col justify-between relative group odd:bg-customNeutral even:bg-Gray p-4 h-full md:h-[170px]",
                i === 5 && "md:even:bg-customNeutral"
              )}
            >
              <div className="text-lg md:text-2xl font-semibold">{title}</div>
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
          <div className="w-full bg-Gray/5 p-4 h-[170px] col-start-3 col-end-4 row-start-2 row-end-3 hidden md:block"></div>
          <div className="w-full bg-Gray/5 p-4 h-[170px] hidden md:block"></div>
          <div className="w-full bg-Gray/10  p-4 h-[170px] hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
export default SignsYouNeedAiSection;
