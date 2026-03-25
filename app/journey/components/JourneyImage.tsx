import Image from "next/image";

export default function JourneyImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mt-6 rounded-md overflow-hidden shadow-md max-w-xl">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  );
}
