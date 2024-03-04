import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Tab = {
  title: string;
  description: React.ReactNode;
  icon: { url: string };
};

interface ProcessSectionProps {
  tabs: Tab[];
}

function ProcessSection({ tabs }: ProcessSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="our-process"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="grad">AI/ML and Predictive Analytics</span> Step by
          Step:
        </h2>
        <div className="text-xl bg-Gray p-4 sm:p-8 md:p-14 rounded-2xl flex flex-col">
          <div className="flex pb-8 gap-2 sm:gap-12">
            {tabs.map(({ icon, title }, i) => (
              <button
                key={i}
                className={`relative focus:outline-none group`}
                onClick={() => handleTabClick(i)}
              >
                <img src={icon.url} alt={title} width={54} height={54} />
                <span
                  className={twMerge(
                    "absolute top-[calc(100%_+_1.75rem)] w-full bg-customGreen h-1 duration-300 opacity-0 transition-opacity left-0 group-hover:opacity-100",
                    i === activeTab && "opacity-100"
                  )}
                ></span>
              </button>
            ))}
          </div>
          <div className="w-full bg-black h-[2px] mb-6"></div>
          {tabs.map(({ title, description }, index) => (
            <div
              key={index}
              className={twMerge(
                "flex-col gap-2",
                activeTab === index ? "flex" : "hidden"
              )}
            >
              <div className="font-bold text-2xl sm:text-3xl">{title}</div>
              <div className="text-sm sm:text-base">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProcessSection;
