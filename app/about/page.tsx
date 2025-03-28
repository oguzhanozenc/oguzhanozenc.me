"use client";

import LetsWorkTogether from "@/components/Footer/LetsWorkTogether";
import {
  AboutItem,
  AboutSubtitle,
  AboutDescription,
} from "@/app/about/components";
import { SectionTitle } from "@/components/SectionTitle";
import { Avatar, AvatarImage } from "@/components/Avatar";

export default function AboutPage() {
  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        <div className="flex-1">
          <SectionTitle>Hey there!</SectionTitle>
          <AboutDescription className="text-lg text-gray-600 leading-relaxed tracking-tight text-justify">
            I am Oguzhan, a Front-End Developer with a strong foundation in
            HTML, CSS, JavaScript, and React, driven by a passion for front-end
            development. I have always been drawn to projects that tell stories
            and make a meaningful impact. Software development allows me to
            transform ideas into reality, and I find the entire process from
            concept to application incredibly rewarding. My goal is to bridge
            the gap between design and development, leveraging my skills to
            create cohesive and impactful projects.
          </AboutDescription>
        </div>

        <Avatar>
          <AvatarImage
            src="/branding/aboutmeimg.jpg"
            alt="Oguzhan Ozenc"
            size="medium"
            className="hover:-rotate-6 transition-all duration-300 ease-in-out"
          />
        </Avatar>
      </div>

      {/* More About Me Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-[#373737] tracking-tight">
          More About Me
        </h2>

        <div className="bg-[#f8f8f8] rounded-xl p-6 flex flex-col gap-6">
          <AboutItem>
            <AboutSubtitle>👨‍💻 Current Role</AboutSubtitle>
            <AboutDescription>
              I am currently spearheading the front-end and full-stack
              development of Offbeat Security, a cutting-edge blockchain
              security business. Utilizing React for dynamic and responsive user
              interfaces, I aim to develop an engaging web application with
              seamless navigation. I integrated and customized a CMS for
              efficient content management and seamless deployment, enhancing
              user engagement with dynamic blog posts.
            </AboutDescription>
          </AboutItem>

          <AboutItem>
            <AboutSubtitle>🎓 Educational Background </AboutSubtitle>
            <AboutDescription>
              With a background in Engineering from Istanbul Technical
              University and ongoing studies in Management Information Systems
              at Anadolu University, I have gained skills that have enabled me
              to tackle complex problems and deliver innovative solutions.
            </AboutDescription>
          </AboutItem>

          <AboutItem>
            <AboutSubtitle>🌌 Journey into Tech</AboutSubtitle>
            <AboutDescription>
              I have always been passionate about a career that would allow me
              to become more creative, and my journey into software development
              was a perfect opportunity for me. During my time at Beko
              Corporate, I applied agile methodologies for sustainable product
              development, researched emerging technologies, and established
              strategic collaborations, contributing to impactful innovation
              initiatives.
            </AboutDescription>
          </AboutItem>

          <AboutItem>
            <AboutSubtitle>💻 Technical Focus</AboutSubtitle>
            <AboutDescription>
              I am particularly focused on React and aiming to incorporate
              Generative AI technologies into my journey. I am excited to join a
              forward-thinking team where I can contribute to innovative
              projects that tell a story and make human life easier. My ideal
              role involves working with cutting-edge technologies in a
              collaborative environment that values creativity, user experience,
              and impactful solutions.
            </AboutDescription>
          </AboutItem>
        </div>
      </section>

      <div>
        <LetsWorkTogether />
      </div>
    </section>
  );
}
