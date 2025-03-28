"use client";

import Image from "next/image";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { SocialLinks, SocialUnit } from "@/components/Socials";

export default function Footer() {
  return (
    <footer className="text-[0.9rem] my-2 border-t border-[#f8f8f8]">
      <section className="w-fit mx-auto py-12 px-8">
        <div
          className="flex flex-col items-center justify-center
          px-4 py-2 rounded-xl bg-white backdrop-blur-[20px]
          shadow-[0px_1.2px_1.2px_0px_rgba(10,10,10,0.06),0px_5px_10px_0px_rgba(10,10,10,0.04)]
          border border-[#f0f0f0] transition-all duration-300 hover:contrast-[1.05]"
        >
          <div className="flex flex-row items-center justify-start mb-4">
            <div className="flex flex-col items-center justify-center p-1 mr-2 text-center rounded-xl transition-all duration-300">
              <Link href="/">
                <Image
                  src="/branding/logo.png"
                  alt="Oguzhan Ozenc Logo"
                  width={48}
                  height={48}
                  className="w-12 h-auto object-contain"
                />
              </Link>
            </div>

            <div className="flex flex-col items-start mt-2">
              <p className="text-md font-semibold tracking-[-0.025rem] p-[0.25rem_0] m-0 text-gray-800 leading-none">
                Oguzhan Ozenc
              </p>
              <p className="text-xs text-gray-500 leading-none">
                Front-end Developer
              </p>
            </div>
          </div>

          {/* Social links */}
          <SocialLinks className="flex flex-row gap-2">
            <SocialUnit href="mailto:hello@oguzhanozenc.me" label="Email">
              <LuMail />
            </SocialUnit>
            <SocialUnit
              href="https://linkedin.com/in/oguzhanozenc"
              label="LinkedIn"
            >
              <FaLinkedin />
            </SocialUnit>
            <SocialUnit href="https://github.com/oguzhanozenc" label="GitHub">
              <FaGithub />
            </SocialUnit>
            <SocialUnit href="https://t.me/oguzhanozenc" label="Telegram">
              <PiTelegramLogoBold />
            </SocialUnit>
            <SocialUnit href="https://x.com/oguzhanozencdev" label="Twitter">
              <RiTwitterXLine />
            </SocialUnit>
          </SocialLinks>
        </div>
      </section>
    </footer>
  );
}
