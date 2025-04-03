import Image from "next/image";

type ProjectMediaProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  contentType?: string;
};

export default function ProjectMedia({
  src,
  alt,
  width = 800,
  height = 450,
  className = "",
  contentType,
}: ProjectMediaProps) {
  const normalizedSrc = src.startsWith("//") ? `https:${src}` : src;
  const isVideo = contentType?.startsWith("video");
  const isImage = contentType?.startsWith("image");

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl">
      {isVideo && (
        <div className="relative overflow-hidden rounded">
          <video
            src={normalizedSrc}
            controls
            className={`rounded object-cover w-full h-auto ${className}`}
          />
        </div>
      )}

      {isImage && (
        <div className="relative overflow-hidden rounded">
          <Image
            src={normalizedSrc}
            alt={alt}
            width={width}
            height={height}
            className={`rounded object-cover ${className}`}
          />
        </div>
      )}

      {/* Optional fallback if no known type */}
      {!isVideo && !isImage && (
        <p className="text-sm text-muted-foreground italic">
          No media available right now.
        </p>
      )}
    </div>
  );
}
