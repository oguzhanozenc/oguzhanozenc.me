import LetsWorkTogether from "@/components/Footer/LetsWorkTogether";
import {
  AboutItem,
  AboutSubtitle,
  AboutDescription,
} from "@/app/about/components";
import { SectionTitle } from "@/components/SectionTitle";
import { Avatar, AvatarImage } from "@/components/Avatar";

export const metadata = {
  title: "About – Oguzhan Ozenc",
  description:
    "Oguzhan Ozenc is a front-end developer who blends thoughtful design with solid structure to build intuitive, scalable interfaces using React, Next.js, and Tailwind CSS.",
  openGraph: {
    title: "About – Oguzhan Ozenc",
    description:
      "Front-end developer with a product-first mindset — focused on building structured, reusable components and polished UIs with React, Next.js, and Tailwind CSS.",
    url: "https://oguzhanozenc.me/about",
    siteName: "Oguzhan Ozenc",
    images: [
      {
        url: "https://oguzhanozenc.me/branding/oguzhanozenc.jpg",
        width: 1200,
        height: 630,
        alt: "Oguzhan Ozenc – Front-End Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About – Oguzhan Ozenc",
    description:
      "Building front-end systems with clarity, structure, and thoughtful design.",
    images: ["https://oguzhanozenc.me/branding/oguzhanozenc.jpg"],
  },
};

export default function AboutPage() {
  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        <div className="flex-1">
          <SectionTitle>Hey there!</SectionTitle>
          <AboutDescription className="text-lg text-gray-600 leading-relaxed tracking-tight text-justify">
            I am Oguzhan, a front-end developer who blends thoughtful design
            with solid structure to build interfaces that feel intuitive and
            cohesive. My approach is shaped by a product-first mindset — one
            that values clarity, usability, and maintainability just as much as
            visual polish. Whether I’m building an AI-assisted meal planner like
            Plateful or crafting an immersive e-commerce experience like
            Homebody, I focus on how each part fits into the bigger picture. For
            me, great frontend work comes from understanding the product — its
            purpose, its users, and the flow behind every interaction. I care
            about creating systems that are not only visually consistent but
            also scalable, accessible, and easy to work with.
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
            <AboutSubtitle>👨‍💻 What I’m Working On</AboutSubtitle>
            <AboutDescription>
              I currently lead the front-end development of multiple real-world
              projects, including Plateful, an AI-powered meal planning
              assistant, and Offbeat Security, a blockchain web app. I
              specialize in React, Next.js 15, Tailwind CSS, and shadcn/ui,
              focusing on building structured, scalable, and polished interfaces
              that feel great to use. Across all projects, I prioritize clean
              architecture, reusability, and a strong sense of user flow.
            </AboutDescription>
          </AboutItem>

          <AboutItem>
            <AboutSubtitle>🧠 My Approach</AboutSubtitle>
            <AboutDescription>
              I take a product-first mindset into every build — solving real UX
              problems with thoughtful, maintainable code. I care about every
              layer of the frontend: how a UI looks, how it behaves, and how it
              scales. I often refactor or componentize layouts for clarity, and
              I love translating real user needs into structured, flexible code
              systems. Whether it is syncing a cart across sessions or
              integrating AI for meal generation, I make sure each screen feels
              intentional and cohesive.
            </AboutDescription>
          </AboutItem>

          <AboutItem>
            <AboutSubtitle>🎓 Background & Learning</AboutSubtitle>
            <AboutDescription>
              I hold a degree in Engineering from Istanbul Technical University
              and am currently studying Management Information Systems at
              Anadolu University. My background helps me approach development
              with analytical thinking, system design, and user empathy. I am
              always trying to learn more about the latest technologies and
              trends — recently expanding into areas like Generative AI,
              Contentful integration, and custom component libraries.
            </AboutDescription>
          </AboutItem>

          <AboutItem>
            <AboutSubtitle>🌱 Looking Ahead</AboutSubtitle>
            <AboutDescription>
              I am continuing to expand my work in Generative AI integration,
              thoughtful UI design, and component libraries. I am especially
              interested in joining a team that values quality, clean code, good
              design systems, and real user impact — somewhere I can build with
              intention, and grow alongside other product-minded developers.
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
