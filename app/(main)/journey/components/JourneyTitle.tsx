export default function JourneyTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-base font-semibold text-gray-900 mb-1">{children}</h2>
  );
}
