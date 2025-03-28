export default function JourneyYear({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
      {children}
    </p>
  );
}
