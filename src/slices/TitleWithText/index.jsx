import { PrismicRichText } from "@prismicio/react";

const TitleWithText = ({ slice }) => {
  const { title, text, textcolor } = slice.primary;

  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="what-are-ai-ml"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <div className="text-3xl md:text-5xl font-bold title">
          <PrismicRichText field={title} />
        </div>
        <div className="richtext" style={{ color: textcolor || "#ffffff" }}>
          <PrismicRichText field={text} />
        </div>
      </div>
    </section>
  );
};

export default TitleWithText;
