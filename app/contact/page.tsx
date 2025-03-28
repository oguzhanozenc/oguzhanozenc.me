"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Button, CopyButton } from "@/components/Button";
import { Avatar, AvatarImage } from "@/components/Avatar";
import { SectionTitle } from "@/components/SectionTitle";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Missing EmailJS configuration. Check environment variables.");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setFormSubmitted(true);
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      alert("There was an issue sending the message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      <div className="w-full flex flex-col items-start gap-8">
        <SectionTitle>Contact</SectionTitle>

        <div className="flex flex-col-reverse md:flex-row gap-10 w-full items-start">
          <div className="w-full max-w-xl">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <p className="text-lg text-gray-700 font-medium">
                  Thanks for reaching out! I will get back to you as soon as
                  possible. 😊
                </p>
                <Button
                  variant="secondary"
                  onClick={() => setFormSubmitted(false)}
                >
                  <RiArrowGoBackLine className="mr-2" />
                  Back to the form
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full"
              >
                <input type="hidden" name="form-name" value="contact" />

                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  autoComplete="name"
                  placeholder="Name"
                  className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-sm text-gray-800 w-full"
                />

                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-sm text-gray-800 w-full"
                />

                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  autoComplete="organization"
                  placeholder="Company"
                  className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-sm text-gray-800 w-full"
                />

                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Message"
                  className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-sm text-gray-800 w-full min-h-[10rem]"
                ></textarea>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  className="w-fit"
                  variant="pulsating"
                >
                  {isLoading ? "Sending..." : "Submit"}
                </Button>
              </form>
            )}
          </div>{" "}
          <div className="flex flex-col items-center md:items-start w-full max-w-xs mx-auto md:mx-0">
            <Avatar>
              <AvatarImage
                src="/branding/contactimg.png"
                alt="Contact image"
                size="medium"
                className="hover:rotate-6 transition-all duration-300 ease-in-out"
              />
            </Avatar>

            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2 mt-4 px-2">
              <p className="text-sm text-gray-500">Prefer email instead?</p>
              <div className="flex flex-row items-center gap-2">
                <p className="text-sm font-medium text-gray-700">
                  hello@oguzhanozenc.me
                </p>
                <CopyButton
                  copyText="hello@oguzhanozenc.me"
                  variant="secondary"
                  label=""
                  className="text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
