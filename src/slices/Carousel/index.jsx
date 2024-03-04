import { PrismicRichText } from "@prismicio/react";
import EmblaCarousel from "@/components/ai-ml/ExamplesSection/ExamplesCarousel";

const TitleWithCardCarousel = ({ slice }) => {
  const { title } = slice.primary;

  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="examples"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <div className="text-3xl md:text-5xl font-bold title">
          <PrismicRichText field={title} />
        </div>
        <EmblaCarousel slides={slice.items} />
      </div>
    </section>
  );
};

export default TitleWithCardCarousel;
