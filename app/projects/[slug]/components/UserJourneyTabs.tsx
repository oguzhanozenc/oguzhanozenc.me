"use client";

import { useEffect, useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsPanel,
  ProjectImage,
} from "@/app/projects/[slug]/components";

type Props = {
  userJourney: {
    fields: {
      title?: string;
      file: {
        url: string;
      };
      description?: string;
    };
  }[];
};

export default function UserJourneyTabs({ userJourney }: Props) {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (userJourney.length > 0) {
      setActiveTab(`stage-1`);
    }
  }, [userJourney]);

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

        {userJourney.map((userJourney, i) => (
          <TabsPanel key={i} value={`stage-${i + 1}`} activeTab={activeTab}>
            <div className="flex flex-col gap-6 p-6">
              <ProjectImage
                src={userJourney.fields.file.url}
                alt={userJourney.fields.title || `Stage ${i + 1}`}
              />
              {userJourney.fields.description && (
                <p className="text-base text-gray-700 dark:text-gray-300">
                  {userJourney.fields.description}
                </p>
              )}
            </div>
          </TabsPanel>
        ))}
      </Tabs>
    </div>
  );
}
