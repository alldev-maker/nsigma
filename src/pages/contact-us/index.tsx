import Head from "next/head";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>();
  const [sending, setSending] = useState(false);
  const [emailSend, setEmailSend] = useState(false);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    setSending(true);
    fetch("/api/contact-email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        reset();
        setEmailSend(true);
        setSending(false);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us | NSigma </title>
      </Head>
      <div className="container mx-auto px-3">
        <form
          className="my-20 max-w-[600px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl mb-10 font-semibold">
            Our team will contact you promptly to discuss the next steps
          </h2>
          <input
            type="text"
            {...register("name", { required: true })}
            className="bg-gray-200 p-3 w-full outline-none ring-0 text-lg"
            placeholder="Your name*"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            className="bg-gray-200 mt-6 p-3 w-full outline-none ring-0 text-lg"
            placeholder="E-mail*"
          />
          <input
            type="number"
            {...register("number")}
            className="bg-gray-200 mt-6 p-3 w-full outline-none ring-0 text-lg"
            placeholder="Phone Number"
          />
          <input
            type="text"
            {...register("company")}
            className="bg-gray-200 mt-6 p-3 w-full outline-none ring-0 text-lg"
            placeholder="Company"
          />
          <textarea
            {...register("idea", { required: true })}
            className="h-[200px] bg-gray-200 mt-6 p-3 w-full outline-none ring-0 text-lg"
            placeholder="Describe your idea*"
          />
          {emailSend && <p className="mt-1">Email Sent!</p>}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#F7476B] text-white capitalize px-8 py-3 hover:scale-105 transition-all duration-200 ease-linear rounded-lg"
            >
              {sending ? "SENDING..." : `Send`}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
