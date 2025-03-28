import { getJourneyEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  JourneyItem,
  JourneyYear,
  JourneyTitle,
  JourneyDescription,
  JourneyImage,
} from "@/app/journey/components";
import { SectionTitle } from "@/components/SectionTitle";

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
