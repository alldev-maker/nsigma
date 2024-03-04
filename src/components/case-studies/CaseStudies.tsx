import { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CaseStudiesCard from "./CaseStudiesCard";

interface ICaseStudiesItemsProps {
  item: any;
}

const CaseStudies = ({ data }: any) => {
  const slider = useRef<any>(null);

  return (
    <section className="pb-20">
      <div className="relative">
        <h2 className=" text-2xl md:mt-5 md:text-[42px] font-extrabold text-white text-center pb-16">
          Case <span className="grad">Studies</span>
        </h2>
        {/* <Image src="/images/half-circle.svg" alt="img" width={140} height={140} className='z-[1] animate-pulse absolute md:-top-10 top-0 md:right-16 w-20 md:w-auto right-2'/> */}
        {/* <Image src="/images/arrow.svg" alt="img" width={120} height={120} className='z-[1] absolute animate-bounce -top-10 md:-left-24 left-0 w-20 md:w-auto'/> */}
      </div>

      <section
        className="container relative mx-auto px-8 md:px-0"
        id="casestudy"
      >
        <Slider ref={slider} {...settings}>
          {data?.map((item: any, idx: number) => (
            <div className="p-3" key={idx}>
              <CaseStudiesCard caseStudy={item} />
            </div>
          ))}
        </Slider>
        <div className="text-white text-4xl">
          <button
            className="absolute top-1/2 -left-0 md:-left-7 transform -translate-y-1/2"
            onClick={() => slider?.current?.slickPrev()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="absolute top-1/2 -right-0 md:-right-7 transform -translate-y-1/2"
            onClick={() => slider?.current?.slickNext()}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </section>
    </section>
  );
};

export default CaseStudies;

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  infinity: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
