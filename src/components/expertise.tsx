import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ExpertiseProps = {
  data: Array<{
    icon: {
      url: string;
    };
    url?: string;
    title: string;
    info: string;
  }>;
};

export default function Expertise({ data }: ExpertiseProps) {
  return (
    <section className="py-16 relative" id="expertise">
      {/* <Image src="/images/circle.png" alt='circle' width={180} height={180} className='absolute animate-spin left-4 -z-0 opacity-40 w-20 md:w-[180px]' />
            <Image src="/images/abstract1.png" alt='abstract1' width={121} height={321} className='absolute animate-pulse right-4 -z-0 w-20 md:w-[121px] top-0  hidden md:block' /> */}
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <h2 className="md:text-[42px] text-2xl md:leading-[50px] font-bold text-white text-center mb-5">
            Our <span className="grad"> Expertise</span>
          </h2>
        </div>
        <div className="bg-Gray rounded-[20px] mt-10 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 overflow-hidden">
          {data?.map((item, idx: number) => {
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
                  {item.info}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <Image src="/images/abstract2.png" alt='abstract2' width={121} height={321} className='absolute animate-pulse left-4 -bottom-20 -z-0 w-20 md:w-[121px] hidden md:block' /> */}
    </section>
  );
}
