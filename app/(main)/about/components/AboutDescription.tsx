interface AboutDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AboutDescription({
  children,
  className = "",
  ...rest
}: AboutDescriptionProps) {
  return (
    <div>
      <p
        className={`text-gray-600 leading-relaxed text-justify ${className}`}
        {...rest}
      >
        {children}
      </p>
    </div>
  );
}
