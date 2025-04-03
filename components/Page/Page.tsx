import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/Navbar/PageTransition";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,180,170,0.13)_0,rgba(0,180,170,0)_50%,rgba(0,180,170,0)_100%)]">
      <div className="flex justify-center items-center text-[#090e14]  w-[70%] mx-auto font-[var(--font-inter)] max-[1200px]:w-[90%]">
        <div className="flex flex-col items-center w-full">
          <Navbar />
          <div className="bg-white w-full my-32 rounded-2xl border border-gray-200 p-8 shadow-[0_1.2px_1.2px_rgba(10,10,10,0.06),0_5px_10px_rgba(10,10,10,0.04)] max-[1200px]:p-4">
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
