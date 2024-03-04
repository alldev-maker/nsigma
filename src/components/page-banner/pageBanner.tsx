const PageBanner = ({ title }: any) => {
  return (
    <section className=" bg-cover bg-no-repeat bg-center -mt-20">
      <div className='h-[50vh] flex items-center justify-center bg-[url("/images/particles.png")] bg-cover bg-no-repeat bg-top w-full'>
        <div className="bg-black/0 w-full h-full pt-20 flex justify-center items-center">
          <div className="container mx-auto px-4">
            <h1 className="me:text-4xl text-3xl font-bold text-white text-center max-w-[720px] mx-auto">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
