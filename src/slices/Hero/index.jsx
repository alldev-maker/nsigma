import { PrismicRichText } from "@prismicio/react";
import CustomLink from "@/components/CustomLink";

const TitleWithButton = ({ slice }) => {
  const { title, video, button } = slice.primary;

  return (
    <section className="relative flex items-center justify-center h-screen mb-12 overflow-hidden -mt-20">
      <div className="relative z-30 text-2xl bg-opacity-50 rounded-xl">
        <div className="flex items-center justify-center bg-black/30 w-screen h-screen">
          <div className="container h-full w-full flex gap-4 px-4 justify-center items-center flex-col">
            <div className="md:text-6xl text-3xl md:leading-[70px] w-full font-semibold text-white text-center mb-5 title">
              <PrismicRichText field={title} />
            </div>

            <CustomLink
              href={button?.url || "#"}
              className="max-w-xs font-normal"
            >
              Get started
            </CustomLink>
          </div>
        </div>
      </div>
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute z-10 w-auto min-w-full h-full max-w-none object-cover"
      >
        <source src={video?.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default TitleWithButton;
