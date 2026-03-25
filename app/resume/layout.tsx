import "@/app/global.css";
import PageTransition from "@/app/components/Navbar/PageTransition";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="resume-body">
      <div className="resume-container">
        <div className="resume-content">
          <PageTransition>{children}</PageTransition>
        </div>
      </div>
    </div>
  );
}