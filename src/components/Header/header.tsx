import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";
import MenuItemWithSubMenu from "./MenuItemWithSubMenu";

const routes = [
  {
    name: "Our Expertise",
    link: "https://nsigma.io/#expertise",
    sublinks: [{ name: "AI/ML", link: "/ai-ml" }],
  },
  {
    name: "Case Studies",
    link: "https://nsigma.io/#casestudy",
  },
  {
    name: "About Us",
    link: "https://nsigma.io/#about",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [upperAnimation, setUpperAnimation] = useState({
    rotate: 0,
    translateY: 0,
  });
  const [middleAnimation, setMiddleAnimation] = useState({
    width: "2.5rem",
  });
  const [lowerAnimation, setLowerAnimation] = useState({
    rotate: 0,
    translateY: 0,
  });

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setUpperAnimation({ rotate: 45, translateY: 10 });
      setMiddleAnimation({ width: "0" });
      setLowerAnimation({ rotate: -45, translateY: -10 });
    } else {
      setUpperAnimation({ rotate: 0, translateY: 0 });
      setMiddleAnimation({ width: "2.5rem" });
      setLowerAnimation({ rotate: 0, translateY: 0 });
    }
  };

  const linksVariants: Variants = {
    close: {
      opacity: 0.5,
      height: 0,
    },
    open: {
      opacity: 1,
      height: 392,
    },
  };

  return (
    <nav className="z-50 flex top-0 w-full justify-center sticky bg-Gray/75  text-white">
      <div className="container flex w-full items-center justify-between gap-2 font-bold px-4 xl:px-4 py-2">
        <div className="md:w-1/4 w-1/2 z-50">
          <Link href="/" className="inline-block">
            <img
              src="/images/logo.png"
              alt="logo"
              width={156}
              height={48}
              className="z-50"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between text-center gap-1 xl:gap-4">
          {routes.map(({ name, link, sublinks }, i) => (
            <div key={name} className="hidden md:block relative group">
              <Link
                href={link}
                key={i}
                className={twMerge(
                  `hidden p-2 md:block md:text-lg text-base font-semibold text-white uppercase`,
                  i === routes.length - 1 &&
                    "bg-custm_pink p-3 min-w-[156px] font-normal text-center rounded-xl hover:scale-105 transition-transform"
                )}
              >
                {name}
              </Link>
              <div className="flex w-full flex-col top-[calc(100%)] md:group-hover:flex group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden duration-300 transition-all h-0 absolute">
                <span className="pt-3"></span>
                <div
                  className={twMerge(
                    "bg-Gray/75 rounded-b-xl gap-2 flex flex-col",
                    sublinks && "py-2"
                  )}
                >
                  {sublinks?.map(({ name, link }) => (
                    <Link
                      href={link}
                      key={name}
                      className={twMerge(
                        `p-2 md:text-lg text-base font-semibold text-white uppercase`
                      )}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/*
                     MOBILE LAYOUT 
                     */}

          <motion.button
            className="flex flex-col items-center gap-2 md:hidden"
            onClick={handleOpen}
            aria-label="Open navigation menu"
          >
            <motion.div
              className="h-[2px] w-10 bg-white"
              animate={upperAnimation}
            ></motion.div>
            <motion.div
              className="h-[2px] w-10 bg-white"
              animate={middleAnimation}
            ></motion.div>
            <motion.div
              className="h-[2px] w-10 bg-white"
              animate={lowerAnimation}
            ></motion.div>
          </motion.button>

          <motion.div
            className="absolute left-0 bg-Gray/75 overflow-hidden top-[100%] z-20 flex w-full origin-top flex-col items-end gap-8 pr-4 uppercase md:!hidden md:flex-row"
            variants={linksVariants}
            initial="close"
            animate={open ? "open" : "close"}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <span></span>
            {/* Empty span here is needed so it acts as padding and doesn't break the animation */}
            {routes.map(({ name, link, sublinks }, i) =>
              sublinks != null ? (
                <MenuItemWithSubMenu
                  key={i}
                  item={{ name, link, subMenuItems: sublinks }}
                  toggleOpen={setOpen}
                />
              ) : (
                <Link
                  href={link}
                  key={i}
                  className={twMerge(
                    `p-2 md:text-lg text-base font-semibold text-white uppercase`,
                    i === routes.length - 1 &&
                      "bg-custm_pink p-3 min-w-[156px] font-normal text-center rounded-xl"
                  )}
                  onClick={handleOpen}
                >
                  {name}
                </Link>
              )
            )}
            <span></span>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
