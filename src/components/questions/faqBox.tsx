export default function FaqBox({ data, id }: any) {
  return (
    <div className="px-2">
      <div className="bg-Gray px-10 py-10">
        <h3 className="text-xl font-bold text-white mb-5">
          <span className="md:text-2xl text-lg font-bold text-[#F6AF23]">
            #{id}{" "}
          </span>{" "}
          {data?.title}
        </h3>
        <p className="text-lg font-medium text-white">{data?.answer}</p>
      </div>
    </div>
  );
}
