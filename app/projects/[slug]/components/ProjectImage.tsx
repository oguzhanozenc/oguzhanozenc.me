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
  return (
    <div className="relative overflow-hidden rounded w-full max-w-4xl">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded object-cover ${className}`}
      />
    </div>
  );
}
