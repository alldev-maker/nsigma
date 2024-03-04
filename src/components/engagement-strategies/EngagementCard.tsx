type EngagementCardProps = {
  image: { url: string };
  info: string;
  title: string;
};

const EngagementCard = ({ image, info, title }: EngagementCardProps) => {
  return (
    <div className="w-full sm:h-[400px] xl:w-[400px] bg-transparent cursor-pointer group  lg:perspective-1000">
      <div className="relative w-full h-full lg:preserve-3d  lg:group-hover:rotate-y-180  duration-500">
        <img
          src={image?.url}
          alt={title}
          className="hidden lg:block p-1 rounded-2xl absolute w-full h-full top-0 left-0 right-0 bottom-0"
        />
        <div className="font-bold px-4 text-3xl bottom-4 hidden lg:block absolute text-neutral-300">
          {title}
        </div>
        <div className="sm:absolute rounded-2xl lg:rotate-y-180 w-full h-full flex flex-col items-center justify-center gap-4 py-4 bg-[#272932]  overflow-hidden p-4 xl:p-10 text-neutral-300 lg:backface-hidden">
          <div className="font-bold text-3xl block lg:hidden text-center">
            {title}
          </div>
          <div className="flex flex-col space-y-5">{info}</div>
        </div>
      </div>
    </div>
  );
};
export default EngagementCard;
