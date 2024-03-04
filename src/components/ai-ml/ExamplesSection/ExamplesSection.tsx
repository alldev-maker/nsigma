import ExamplesCarousel from "./ExamplesCarousel";

type ExamplesSectionProps = {
  examples: Array<{
    title: string;
    image: { url: string };
    description: string;
  }>;
};

function ExamplesSection({ examples }: ExamplesSectionProps) {
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="examples"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Examples of <span className="grad">AI/ML & Predictive Analytics</span>
        </h2>
        <ExamplesCarousel slides={examples} />
      </div>
    </section>
  );
}
export default ExamplesSection;
