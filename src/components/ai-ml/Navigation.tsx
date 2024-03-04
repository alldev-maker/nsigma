import Link from "next/link";

const SECTIONS = [
  { title: "AI/ML and Predictive Analytics", id: "ai-ml-and-data-science" },
  { title: "What Are AI/ML", id: "what-are-ai-ml" },
  { title: "Our Process", id: "our-process" },
  { title: "Signs you need AI/ML", id: "signs-you-need-ai" },
  { title: "Benefits", id: "benefits" },
  { title: "Examples", id: "examples" },
  { title: "Why Us", id: "why-us" },
];

function Navigation() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="container w-fit mx-4 px-4 bg-Gray flex-wrap flex items-center justify-center rounded-[42px] py-2 text-white gap-x-8 gap-y-2">
        {SECTIONS.map(({ title, id }) => (
          <Link href={`#${id}`} key={id} className="text-nowrap">
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Navigation;
