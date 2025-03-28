type Props = {
  children: React.ReactNode;
  isLast: boolean;
};

export default function ResumeSkillItem({ children, isLast }: Props) {
  return (
    <li className="mr-[0.25rem] text-[0.875rem]">
      {children}
      {isLast ? "." : ","}
    </li>
  );
}
