import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

const TitleWithExpertise = ({ slice }) => {
  const { title } = slice.primary;
  return (
    <section className="py-16 relative" id="expertise">
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:text-[42px] text-2xl md:leading-[50px] font-bold text-white text-center mb-5 title">
          <PrismicRichText field={title} />
        </div>
        <div className="bg-Gray rounded-[20px] mt-10 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 overflow-hidden">
          {slice.items?.map((item, idx) => {
            return (
              <Link
                href={`${item?.url ?? "#"}`}
                key={idx}
                className={twMerge(
                  `relative flex flex-col md:flex-col-reverse group gap-4 py-6 px-8 md:py-14 md:px-16`,
                  idx % 2 === 0 && "bg-black/20"
                )}
              >
                <div className="w-full flex items-center justify-start">
                  <div className="w-[61px] h-[61px] bg-black flex items-center justify-center rounded-full">
                    <img
                      src={item.icon.url}
                      alt="experty/1"
                      width={26}
                      height={26}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-base font-medium text-lightGray md:absolute md:opacity-0 group-hover:opacity-100 transition-opacity md:h-full md:w-full md:bg-black duration-300 md:top-0 md:left-0 md:p-4 md:grid md:place-items-center">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TitleWithExpertise;
