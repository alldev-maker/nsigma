import { FC } from "react";

import EngagementCard from "./EngagementCard";

const EngagementStrategies: FC<any> = ({ data }) => {
  return (
    <section
      className="py-16 overflow-hidden px-3 md:px-0 grid place-items-center"
      id="engagement"
    >
      <div className="container relative ">
        <h2 className=" text-2xl md:text-[42px]  font-extrabold text-white text-center pb-16">
          Engagement <span className="grad">Strategies</span>
        </h2>
        <div className="bg-[#1E2029] rounded-[20px] px-2 sm:px-6 relative 2xl:px-32 py-6 xl:py-16 z-10 flex flex-col lg:flex-row items-center justify-center gap-8 2xl:gap-12">
          {data?.map((item: any, i: number) => (
            <EngagementCard
              key={i}
              image={item.image}
              info={item.info}
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

export default EngagementStrategies;
