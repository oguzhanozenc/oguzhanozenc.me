"use client";

import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsPanel,
  ProjectMedia,
} from "@/app/projects/[slug]/components";

type Props = {
  userJourney: {
    fields: {
      title?: string;
      file: {
        url: string;
        contentType?: string;
      };
      description?: string;
    };
  }[];
};

export default function UserJourneyTabs({ userJourney }: Props) {
  const [activeTab, setActiveTab] = useState(
    userJourney.length > 0 ? `stage-1` : ""
  );

  return (
    <div className="mb-20">
      <Tabs>
        <TabsList>
          {userJourney.map((journey, i) => (
            <TabsTrigger
              key={i}
              value={`stage-${i + 1}`}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              {journey.fields.title || `Stage ${i + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>

        {userJourney.map((journey, i) => {
          const { file, title, description } = journey.fields;
          const normalizedSrc = file.url.startsWith("//")
            ? `https:${file.url}`
            : file.url;

          return (
            <TabsPanel key={i} value={`stage-${i + 1}`} activeTab={activeTab}>
              <div className="flex flex-col gap-6 p-6">
                <ProjectMedia
                  src={normalizedSrc}
                  alt={title || `Stage ${i + 1}`}
                  contentType={file.contentType}
                />
                {description && (
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {description}
                  </p>
                )}
              </div>
            </TabsPanel>
          );
        })}
      </Tabs>
    </div>
  );
}
