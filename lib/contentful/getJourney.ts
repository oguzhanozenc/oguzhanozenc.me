import { client } from "@/lib/contentful/client";

import { Document } from "@contentful/rich-text-types";

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
