import Link from "next/link";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import CustomLink from "./CustomLink";

export default function Footer() {
  const handleMail = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/mailsend");
  };

  return (
    <footer className="bg-Gray relative">
      <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between items-center gap-7 pt-16 pb-10 border-b border-[#696B76]/40">
        <div className="md:w-1/2 flex justify-center sm:justify-start w-full">
          <Link href="/" className="inline-block">
            <img
              src="/images/footer-logo.png"
              alt="logo"
              width={250}
              height={76}
            />
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex flex-col sm:flex-row justify-between items-center gap-7">
          <h5 className="md:text-[34px] text-2xl font-bold text-white">
            Ready to get started?
          </h5>
          <CustomLink href="/contact-us">Get Started</CustomLink>
        </div>
      </div>
      <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7 pt-10 pb-16 relative z-[1]">
        <div className="md:w-[30%] w-full">
          <h6 className="md:text-[22px] md:leading-8 text-lg font-bold text-white">
            Subscribe to our newsletter
          </h6>
          <form className="relative my-10">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your Email Adreess"
              className="text-sm font-normal text-[#858B93] placeholder:text-[#858B93] appearance-none bg-transparent p-4 rounded-[26px] outline-none border border-[#272633] w-full"
            />
            <button
              onClick={(e) => handleMail(e)}
              className="text-2xl text-white bg-gradient-to-r from-[#EB9204] to-[#83E868] h-[38px] w-[38px] inline-flex items-center justify-center rounded-full absolute right-2 inset-y-1/2 -translate-y-1/2"
            >
              <FaChevronRight />
            </button>
          </form>
          <ul className="flex items-center flex-wrap gap-3">
            <li>
              <Link
                href="htts://facebook.com"
                className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href="htts://x.com"
                className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="htts://linkedin.com"
                className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                href="htts://instagram.com"
                className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
              >
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link
                href="mailto://info@nsigma.io"
                className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
              >
                <FaEnvelope />
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-[70%] w-full grid md:grid-cols-3 grid-cols-1 gap-7">
          <div>
            <h6 className="md:text-[22px] md:leading-8 text-lg font-bold text-white mb-6">
              Services
            </h6>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="https://nsigma.io/#expertise"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  Data Strategy & Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-ml"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  AI/ML & Predictive Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="https://nsigma.io/#expertise"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  DataOps Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://nsigma.io/#expertise"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="https://nsigma.io/#expertise"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  BI Automation & Data Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="md:text-[22px] md:leading-8 text-lg font-bold text-white mb-6">
              About
            </h6>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="https://nsigma.io/"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
            <div className="mt-5">
              <h6 className="md:text-[22px] md:leading-8 text-lg font-bold text-white mb-6">
                Help
              </h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies-policy"
                    className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                  >
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-xl font-medium text-lightGray hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-lightGray text-xl">
            <h6 className="md:text-[22px] md:leading-8 text-lg font-bold text-white mb-6">
              Contact
            </h6>
            <p>
              NSigma Global <br />
              2915 Biscayne Blvd
              <br />
              Miami, FL 33137
            </p>
            <Link
              className="flex items-center gap-2 mt-4"
              href="mailto:info@nsigma.io"
            >
              <FaEnvelope />
              <span>info@nsigma.io</span>
            </Link>
            <Link
              className="flex items-center gap-2 mt-4"
              href="tel:+19044694458"
            >
              <FaMobileAlt />
              <span>+1-904-469-4458</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <Image src="/images/abstract.png" alt='abstract' width={94} height={250} className='absolute left-4 bottom-5 -z-0' /> */}
    </footer>
  );
}
