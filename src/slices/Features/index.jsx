import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

const TitleWithAnalytics = ({ slice }) => {
  const { title } = slice.primary;

  switch (slice.variation) {
    case "secondary":
      return (
        <section
          className="w-full flex justify-center items-center py-12"
          id="benefits"
        >
          <div className="container flex flex-col gap-12 text-white px-4">
            <div className="text-3xl md:text-5xl font-bold title">
              <PrismicRichText field={title} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="w-full bg-Gray/10 p-4 h-[170px] hidden md:block"></div>
              <div className="w-full bg-Gray/5  p-4 h-[170px] hidden md:block"></div>
              <div className="w-full bg-Gray/5  p-4 h-[170px] col-start-1 col-end-2 row-start-2 row-end-3 hidden md:block"></div>
              {slice.items.map(({ title, icon, description }, i) => (
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
    case "third":
      return (
        <section
          className="w-full flex justify-center items-center py-12"
          id="benefits"
        >
          <div className="container flex flex-col gap-12 text-white px-4">
            <div className="text-3xl md:text-5xl font-bold title">
              <PrismicRichText field={title} />
            </div>
            <div
              className="flex flex-wrap justify-center gap-5 mx-auto w-full"
              style={{ maxWidth: "768px" }}
            >
              {slice.items.map(({ title, icon, description }, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between odd:bg-customNeutral even:bg-Gray p-4 relative group"
                  style={{ height: "300px", width: "300px" }}
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
    default:
      return (
        <section
          className="w-full flex justify-center items-center py-12"
          id="signs-you-need-ai"
        >
          <div className="container flex flex-col gap-12 text-white px-4">
            <div className="text-3xl md:text-5xl font-bold title">
              <PrismicRichText field={title} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {slice.items.map(({ title, icon, description }, i) => (
                <div
                  key={i}
                  className={twMerge(
                    "w-full flex flex-col justify-between relative group odd:bg-customNeutral even:bg-Gray p-4 h-full md:h-[170px]",
                    i === 5 && "md:even:bg-customNeutral"
                  )}
                >
                  <div className="text-lg md:text-2xl font-semibold">
                    {title}
                  </div>
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
};

export default TitleWithAnalytics;
