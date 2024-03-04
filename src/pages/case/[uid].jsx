import Head from "next/head";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import PageBanner from "@/components/page-banner/pageBanner";

const CaseStudiesSlug = ({ page }) => {
  const { title, image, content } = page;
  return (
    <>
      <Head>
        <title>Nsigma | Data Driven Intelligence</title>
      </Head>
      <div className="bg-[#000200]">
        <PageBanner title={title} />
        <div className="p-3">
          <figure className="overflow-hidden flex justify-center -mt-10 mb-4">
            <img
              src={image?.url}
              width={500}
              height={400}
              alt={title || ""}
              className="mx-auto"
            />
          </figure>
        </div>
        <div className="max-w-[1000px] mx-auto px-3 pb-20 md:px-0 _contnet">
          <PrismicRichText field={content} />
        </div>
      </div>
    </>
  );
};

export default CaseStudiesSlug;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const home = await client.getSingle("home");
  const caseStudies = home.data.case_studies;

  const page = caseStudies.find((caseStudy) => caseStudy.slug === params.uid);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
}
export async function getStaticPaths() {
  const client = createClient();

  const home = await client.getSingle("home");
  const caseStudies = home.data.case_studies;

  return {
    paths: caseStudies.map((caseStudy) => {
      return {
        params: { uid: caseStudy.slug },
      };
    }),
    fallback: false,
  };
}
