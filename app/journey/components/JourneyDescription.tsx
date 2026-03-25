export default function JourneyDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-sm text-gray-600 leading-relaxed text-justify">
      {children}
    </p>
  );
}
