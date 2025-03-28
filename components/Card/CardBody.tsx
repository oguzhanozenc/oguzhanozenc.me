import clsx from "clsx";

function CardBody({ children }: { children?: React.ReactNode }) {
  if (!children) return null;

  const sizeClasses = {
    small: "text-sm",
    medium: "text-[1.125rem]",
    large: "text-lg",
  };

  return (
    <p
      className={clsx(
        "font-normal text-gray-600 mb-4 tracking-tight max-sm:text-left",
        sizeClasses.medium
      )}
    >
      {children}
    </p>
  );
}

export default CardBody;
