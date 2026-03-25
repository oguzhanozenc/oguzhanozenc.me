import { getJourneyEntries } from "@/lib/contentful/getJourney";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  JourneyItem,
  JourneyYear,
  JourneyTitle,
  JourneyDescription,
  JourneyImage,
} from "@/app/journey/components";
import { SectionTitle } from "@/app/components/SectionTitle";

export const metadata = {
  title: "Journey – Oguzhan Ozenc | Frontend Developer",
  description:
    "Explore Oguzhan Ozenc’s professional path in frontend development — from early experience to building UI systems, shipping real-world projects, and evolving with modern tools like React and Next.js.",
  openGraph: {
    title: "Journey – Oguzhan Ozenc | Frontend Developer",
    description:
      "A timeline of Oguzhan Ozenc’s work in frontend development — focusing on real projects, UI architecture, and design-conscious development with React and Next.js.",
    url: "https://oguzhanozenc.me/journey",
    siteName: "Oguzhan Ozenc",
    images: [
      {
        url: "https://oguzhanozenc.me/branding/oguzhanozenc.jpg",
        width: 1200,
        height: 630,
        alt: "Oguzhan Ozenc – Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey – Oguzhan Ozenc | Frontend Developer",
    description:
      "A look at Oguzhan's evolution in frontend development — building modular UIs, working on real-world projects, and focusing on structured design.",
    images: ["https://oguzhanozenc.me/branding/oguzhanozenc.jpg"],
  },
};

export default async function Journey() {
  const journeyData = await getJourneyEntries();

  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      <SectionTitle>Journey</SectionTitle>

      <div className="flex flex-col gap-10">
        {journeyData.map((item, index) => {
          const imageUrl = item.image?.fields?.file?.url
            ? `https:${item.image.fields.file.url}`
            : null;

          return (
            <JourneyItem key={index} isLast={index === journeyData.length - 1}>
              <JourneyYear>{item.year}</JourneyYear>
              <JourneyTitle>{item.title}</JourneyTitle>
              <JourneyDescription>
                {documentToReactComponents(item.description)}
              </JourneyDescription>
              {imageUrl && <JourneyImage src={imageUrl} alt={item.title} />}
            </JourneyItem>
          );
        })}
      </div>
    </section>
  );
}
