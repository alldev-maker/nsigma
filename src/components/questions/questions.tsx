import FaqBox from "./faqBox";
import Slider from "react-slick";

const Questions = ({ data }: any) => {
  return (
    <section className="py-16 -mt-28 relative z-40">
      <Slider
        {...settings}
        className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 md:-mt-[100px] mt-0"
      >
        {data?.map((item: any, idx: number) => {
          return <FaqBox key={idx} id={idx + 1} data={item} />;
        })}
      </Slider>
    </section>
  );
};

export default Questions;

var settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 5500,
  delay: 3000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};
