import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ProjectImage({
  src,
  alt,
  width = 800,
  height = 450,
  className = "",
}: ProjectImageProps) {
  const normalizedSrc = src.startsWith("//") ? `https:${src}` : src;

  return (
    <div className="relative overflow-hidden rounded w-full max-w-4xl">
      <Image
        src={normalizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`rounded object-cover ${className}`}
      />
    </div>
  );
}
