import { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { IoChevronForwardOutline } from "react-icons/io5";

type PropType = {
  slides: Array<{
    title: string;
    image: { url: string };
    description: string;
  }>;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {slides.map(({ description, image, title }, i) => (
              <div
                className="relative group bg-Gray rounded-xl min-w-0 flex flex-col gap-4 flex-[0_0_100%] md:flex-[0_0_49%] lg:flex-[0_0_32%] xl:flex-[0_0_32.5%] p-4 md:pl-4"
                key={i}
              >
                <div className="relative w-full h-80 group-hover:scale-105 transition-transform">
                  <img
                    src={image.url}
                    alt="Your alt text"
                    className="object-contain absolute w-full h-full right-0 left-0 bottom-0 top-0"
                  />
                </div>
                <div className="text-3xl">{title}</div>
                <div className="text-base">{description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute w-full left-0 top-1/2 flex text-3xl items-end justify-between">
          <button onClick={scrollPrev} disabled={prevBtnDisabled}>
            <IoChevronForwardOutline className="rotate-180" />
          </button>
          <button onClick={scrollNext} disabled={nextBtnDisabled}>
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
