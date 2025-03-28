import { journeyData } from "@/data/journey";
import {
  JourneyItem,
  JourneyYear,
  JourneyTitle,
  JourneyDescription,
  JourneyImage,
} from "@/app/journey/components";
import { SectionTitle } from "@/components/SectionTitle";

export default function Journey() {
  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      <SectionTitle>Journey</SectionTitle>

      <div className="flex flex-col gap-10">
        {journeyData.map((item, index) => (
          <JourneyItem key={index} isLast={index === journeyData.length - 1}>
            <JourneyYear>{item.year}</JourneyYear>
            <JourneyTitle>{item.title}</JourneyTitle>
            <JourneyDescription>{item.description}</JourneyDescription>
            {item.image && <JourneyImage src={item.image} alt={item.title} />}
          </JourneyItem>
        ))}
      </div>
    </section>
  );
}
