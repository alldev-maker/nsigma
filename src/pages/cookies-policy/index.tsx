import Link from "next/link";

const CookiesPolicy = () => {
  return (
    <section className="bg-[#242727] text-white">
      <div className="container mx-auto px-3 py-20 md:text-lg">
        <h2 className="font-medium text-2xl md:text-4xl mb-4">Cookie policy</h2>
        <p>
          This cookie policy (“Policy”) describes what cookies are and how
          they’re being used by the{" "}
          <Link href="/" className="text-blue-500">
            nsigma.io
          </Link>{" "}
          website (“Website” or “Service”) and any of its related products and
          services (collectively, “Services”). This Policy is a legally binding
          agreement between you (“User”, “you” or “your”) and NSigma Global LLC
          (“NSigma Global LLC”, “we”, “us” or “our”). If you are entering into
          this Policy on behalf of a business or other legal entity, you
          represent that you have the authority to bind such entity to this
          Policy, in which case the terms “User”, “you” or “your” shall refer to
          such entity. If you do not have such authority, or if you do not agree
          with the terms of this Policy, you must not accept this Policy and may
          not access and use the Website and Services. You should read this
          Policy so you can understand the types of cookies we use, the
          information we collect using cookies and how that information is used.
          It also describes the choices available to you regarding accepting or
          declining the use of cookies. For further information on how we use,
          store and keep your personal data secure, see our{" "}
          <Link href="/privacy-policy" className="text-blue-500">
            privacy policy
          </Link>
          .
        </p>
        <h2 className="font-medium text-2xl md:text-4xl my-4">
          Table of contents
        </h2>
        <ol className="list-decimal pl-5">
          <li className="py-1">
            <a href="#what-are-cookies" className="hover:text-blue-500">
              What are cookies?
            </a>
          </li>
          <li className="py-1">
            <a
              href="#what-type-of-cookies-do-we-use"
              className="hover:text-blue-500"
            >
              What type of cookies do we use?
            </a>
          </li>
          <li className="py-1">
            <a href="#changes-and-amendments" className="hover:text-blue-500">
              Changes and amendments
            </a>
          </li>
          <li className="py-1">
            <a
              href="#acceptance-of-this-policy"
              className="hover:text-blue-500"
            >
              Acceptance of this policy
            </a>
          </li>
          <li className="py-1">
            <a href="#contacting-us" className="hover:text-blue-500">
              Contacting us
            </a>
          </li>
        </ol>
        <h2
          className="font-medium text-2xl md:text-4xl my-4"
          id="what-are-cookies"
        >
          What are cookies?
        </h2>
        <p className="mt-4">
          Cookies are small pieces of data stored in text files that are saved
          on your computer or other devices when websites are loaded in a
          browser. They are widely used to remember you and your preferences,
          either for a single visit (through a “session cookie”) or for multiple
          repeat visits (using a “persistent cookie”).
        </p>
        <p className="mt-4">
          Session cookies are temporary cookies that are used during the course
          of your visit to the Website, and they expire when you close the web
          browser.
        </p>
        <p className="mt-4">
          Persistent cookies are used to remember your preferences within our
          Website and remain on your desktop or mobile device even after you
          close your browser or restart your computer. They ensure a consistent
          and efficient experience for you while visiting the Website and
          Services.
        </p>
        <p className="mt-4">
          Cookies may be set by the Website (“first-party cookies”), or by third
          parties, such as those who serve content or provide advertising or
          analytics services on the Website (“third party cookies”). These third
          parties can recognize you when you visit our website and also when you
          visit certain other websites.
        </p>
        <h2
          className="font-medium text-2xl md:text-4xl my-4"
          id="what-type-of-cookies-do-we-use"
        >
          What type of cookies do we use?
        </h2>
        <p className="mt-4">
          We do not use cookies to track your internet or Website usage, to
          collect or store your personal information or for any other reason.
          However, please be advised that in some countries, data such as cookie
          IDs is considered to be personal information. To the extent we process
          such data that is considered personal information, we will process the
          data in accordance with our privacy and cookie policies.
        </p>
        <h2
          className="font-medium text-2xl md:text-4xl my-4"
          id="changes-and-amendments"
        >
          Changes and amendments?
        </h2>
        <p className="mt-4">
          We reserve the right to modify this Policy or its terms related to the
          Website and Services at any time at our discretion. When we do, we
          will revise the updated date at the bottom of this page. We may also
          provide notice to you in other ways at our discretion, such as through
          the contact information you have provided.
        </p>
        <p className="mt-4">
          An updated version of this Policy will be effective immediately upon
          the posting of the revised Policy unless otherwise specified. Your
          continued use of the Website and Services after the effective date of
          the revised Policy (or such other act specified at that time) will
          constitute your consent to those changes.
        </p>
        <h2
          className="font-medium text-2xl md:text-4xl my-4"
          id="acceptance-of-this-policy"
        >
          Acceptance of this policy
        </h2>
        <p className="mt-4">
          You acknowledge that you have read this Policy and agree to all its
          terms and conditions. By accessing and using the Website and Services
          you agree to be bound by this Policy. If you do not agree to abide by
          the terms of this Policy, you are not authorized to access or use the
          Website and Services.
        </p>
        <h2
          className="font-medium text-2xl md:text-4xl my-4"
          id="contacting-us"
        >
          Contacting us
        </h2>
        <p className="mb-4">
          If you have any questions, concerns, or complaints regarding this
          Policy or the use of cookies, we encourage you to contact us using the
          details below:
        </p>
        <Link
          href="mailto:support@nsigma.io"
          className="text-xl font-medium text-blue-500"
        >
          support@nsigma.io
        </Link>
        <p className="mt-4">
          This document was last updated on January 19, 2024
        </p>
      </div>
    </section>
  );
};

export default CookiesPolicy;
