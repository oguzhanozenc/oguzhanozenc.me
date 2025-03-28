"use client";

import { Button } from "@/components/Button";

export default function ResumeDownloadButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mb-4 print:hidden">
      <Button
        onClick={handlePrint}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-all duration-300"
      >
        Print or Save as PDF
      </Button>
    </div>
  );
}
