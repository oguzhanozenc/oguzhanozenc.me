import { createClient } from "contentful";
import { Document } from "@contentful/rich-text-types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export type JourneyItem = {
  title: string;
  year: number;
  description: Document;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
};

export async function getJourneyEntries(): Promise<JourneyItem[]> {
  const res = await client.getEntries({
    content_type: "journey",
    order: ["-fields.position"],
  });
  return res.items.map((item) => item.fields as JourneyItem);
}
