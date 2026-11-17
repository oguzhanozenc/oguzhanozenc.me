import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-end gap-6 px-5 py-10 sm:px-10 sm:py-16">
      <h1 className="text-[clamp(2.5rem,7.4vw,7.75rem)] font-medium leading-[0.94] tracking-[-0.045em]">
        Nothing here yet.
      </h1>
      <Link href="/" className="text-[17px] underline decoration-1 underline-offset-[5px] hover:text-muted">
        Back to the start
      </Link>
    </main>
  );
}
