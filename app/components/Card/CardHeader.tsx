import clsx from "clsx";

function CardHeader({ children }: { children: React.ReactNode }) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-[2.25rem]",
    large: "text-3xl",
  };

  return (
    <h2
      className={clsx(
        "font-semibold text-gray-900 mb-1 tracking-tighter max-sm:text-left",
        sizeClasses.medium
      )}
    >
      {children}
    </h2>
  );
}

export default CardHeader;
