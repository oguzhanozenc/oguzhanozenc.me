interface AboutSubTitleProps {
  children: React.ReactNode;
}

export default function AboutSubTitle({ children }: AboutSubTitleProps) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}
