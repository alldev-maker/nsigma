import CustomLink from "../CustomLink";

function ReadySection() {
  return (
    <div className="w-full py-20">
      <div className="text-white gap-4 text-center flex-col w-full bg-customNeutral px-4 flex items-center justify-center py-20">
        <h2 className="text-4xl md:text-6xl pb-4 font-bold">
          Ready to get Started?
        </h2>
        <div className="max-w-lg">
          Unlike competitors with preferential relationships with different
          providers, NSigma's flexible approach uses the best technologies
          suited to each project, ensuring optimal outcomes.
        </div>
        <CustomLink href="#" className="p-2 font-normal">
          Schedule a call
        </CustomLink>
      </div>
    </div>
  );
}
export default ReadySection;
