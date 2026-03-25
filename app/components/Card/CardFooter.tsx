import clsx from "clsx";

function CardFooter({ children }: { children?: React.ReactNode }) {
  if (!children) return null;

  const sizeClasses = {
    small: "space-x-2",
    medium: "space-x-4",
    large: "space-x-6",
  };

  return (
    <div className={clsx("flex justify-center", sizeClasses.medium)}>
      {children}
    </div>
  );
}

export default CardFooter;
