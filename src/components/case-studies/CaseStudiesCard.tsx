import Link from "next/link";

const CaseStudiesCard = ({ caseStudy }: any) => {
  return (
    <article className="bg-[#1E2029] group rounded-[20px] overflow-hidden">
      <Link href={`/${caseStudy?.slug}`}>
        <figure className="rounded-[20px] cursor-pointer overflow-hidden">
          <img
            src={caseStudy.image.url}
            alt={caseStudy.title}
            width={370}
            height={250}
            className="w-full transition-all duration-200 ease-linear group-hover:scale-105 "
          />
        </figure>
      </Link>
      <div className="p-4 px-6">
        <Link href={`/case/${caseStudy?.slug}`}>
          <h3 className="text-xl min-h-[56px] cursor-pointer text-white">
            {caseStudy.title}
          </h3>
        </Link>
        <p className="text-lightGray italic mt-2 pb-2 2xl:min-h-[105px] lg:min-h-[128px]">
          {caseStudy.info}
        </p>
      </div>
    </article>
  );
};

export default CaseStudiesCard;
