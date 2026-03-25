import { LuSparkles } from "react-icons/lu";

type JourneyItemProps = {
  children: React.ReactNode;
  isLast: boolean;
};

export default function JourneyItem({ children, isLast }: JourneyItemProps) {
  return (
    <div className="flex items-start gap-6 relative mb-10 group">
      <div className="flex flex-col items-center">
        <div className="text-gray-600 text-xl bg-white z-10">
          <LuSparkles />
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-1 min-h-screen"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(209,213,219,1), rgba(209,213,219,0))",
            }}
          />
        )}
      </div>

      <div className="flex-1 transition-colors duration-200 hover:bg-gray-50/50 p-2 rounded-xl">
        {children}
      </div>
    </div>
  );
}
