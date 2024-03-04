import EngagementCard from "@/components/engagement-strategies/EngagementCard";
import { PrismicRichText } from "@prismicio/react";

const TitleWithCards = ({ slice }) => {
  const { title } = slice.primary;
  return (
    <section
      className="py-16 overflow-hidden px-3 md:px-0 grid place-items-center"
      id="engagement"
    >
      <div className="container relative ">
        <div className="text-2xl md:text-[42px] font-extrabold text-white text-center pb-16 title">
          <PrismicRichText field={title} />
        </div>
        <div className="bg-[#1E2029] rounded-[20px] px-2 sm:px-6 relative 2xl:px-32 py-6 xl:py-16 z-10 flex flex-col lg:flex-row items-center justify-center gap-8 2xl:gap-12">
          {slice.items?.map((item, i) => (
            <EngagementCard
              key={i}
              image={item.image}
              info={item.description}
              title={item.title}
            />
          ))}
        </div>
        <img
          src="/images/circle.svg"
          alt="img"
          width={140}
          height={140}
          className="absolute -right-16 top-1/2 z-[1]"
        />
      </div>
    </section>
  );
};

export default TitleWithCards;
