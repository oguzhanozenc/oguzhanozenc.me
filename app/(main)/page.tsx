import Link from "next/link";
import { RecentProjects } from "@/components/RecentProjects";
import { PiHandPeace, PiTelegramLogoBold } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/Button/";
import { Avatar, AvatarBadge, AvatarImage } from "@/components/Avatar";
import { SocialLinks, SocialUnit } from "@/components/Socials/";
import { LetsWorkTogether } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";

export default function HomePage() {
  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      <div className="flex flex-col justify-center items-stretch">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center rounded-md p-6 max-sm:p-0">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-left lg:w-1/2 max-sm:w-full max-sm:my-4">
            <SectionTitle>I’m Oguzhan</SectionTitle>
            <p className="text-[1.125rem] text-gray-600 p-0 m-0 text-justify">
              Front-end developer based in Istanbul, Turkey.
            </p>
            <div className="flex flex-row items-center mt-8 sm:mt-4 space-x-4">
              <Link href="/projects">
                <Button variant="secondary">
                  My Work <MdKeyboardDoubleArrowRight />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="pulsating"
                  className="transition-all duration-300 hover:-rotate-4"
                >
                  Say Hello! <PiHandPeace />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-row max-sm:flex-col items-center justify-center lg:w-1/2 gap-3 max-sm:my-4">
            <Avatar>
              <AvatarImage
                src="/branding/me.png"
                alt="Oguzhan Ozenc"
                className="hover:rotate-6 transition-all duration-300 ease-in-out"
              />
              <AvatarBadge>
                <GoDotFill className="mr-1" />
                AVAILABLE FOR WORK
              </AvatarBadge>
            </Avatar>

            {/* Social Media Links */}
            <div className="flex flex-col justify-center items-center mt-4 ">
              <SocialLinks className="flex max-sm:flex-row flex-col gap-1.5">
                <SocialUnit href="mailto:hello@oguzhanozenc.me" label="Email">
                  <LuMail />
                </SocialUnit>
                <SocialUnit
                  href="https://linkedin.com/in/oguzhanozenc"
                  label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialUnit>
                <SocialUnit
                  href="https://github.com/oguzhanozenc"
                  label="GitHub"
                >
                  <FaGithub />
                </SocialUnit>
                <SocialUnit href="https://t.me/oguzhanozenc" label="Telegram">
                  <PiTelegramLogoBold />
                </SocialUnit>
                <SocialUnit
                  href="https://x.com/oguzhanozencdev"
                  label="Twitter"
                >
                  <RiTwitterXLine />
                </SocialUnit>
              </SocialLinks>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-16 my-4">
        <div className="my-4">
          <p className="text-2xl font-semibold text-left text-gray-800 py-4 mb-2">
            Projects
          </p>
          <RecentProjects />
        </div>
        <div className="my-4">
          <LetsWorkTogether />
        </div>
      </div>
    </section>
  );
}
