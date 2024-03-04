type WhatIsAiSectionProps = {
  content: string;
};

function WhatIsAiSection({ content }: WhatIsAiSectionProps) {
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="what-are-ai-ml"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          What is <span className="grad">AI/ML and Predictive Analytics </span>
          and how do they work together?
        </h2>
        <div className="text-xl whitespace-pre-line">{content}</div>
      </div>
    </section>
  );
}
export default WhatIsAiSection;
