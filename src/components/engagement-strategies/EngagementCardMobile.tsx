import { FC } from "react";

interface EngagementCardProps {
  idx: number;
  length: number;
  data: any;
}

const EngagementCardMobile: FC<EngagementCardProps> = ({
  idx,
  length,
  data,
}) => {
  return (
    <section
      className={`relative md:hidden gap-5 ${idx === length ? "pb-5" : "pb-10"}`}
    >
      <div
        className={`flex gap-4 ${idx % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
      >
        <figure className="bg-[#272932] rounded-xl p-6 w-full flex justify-center">
          <img src={data.image.asset.url} alt="img" width={300} height={200} />
        </figure>
        <div>
          <button className="bg-[#272932] z-10 relative rounded-full border-[2px] border-gray-700 text-white w-12 h-12 md:w-16 md:h-16 md:text-xl stroke-black/5">
            0{idx}
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h3
          className={`text-white text-xl md:text-[26px] font-bold capitalize ${idx % 2 === 0 && "text-right"}`}
        >
          {data.title}
        </h3>
        <p
          className={`mt-1.5 text-lightGray md:text-lg ${idx % 2 === 0 && "text-right"}`}
        >
          {data?.info}
        </p>
      </div>
    </section>
  );
};

export default EngagementCardMobile;
