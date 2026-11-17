import Image from "next/image";

const label = "font-mono text-[11px] uppercase leading-[1.35] tracking-[0.08em] text-muted";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function HomePage() {
  return (
    <main className="relative flex min-h-svh flex-col px-5 py-5 sm:px-10 sm:py-8">
      <header className="intro-late flex items-center justify-between" style={step(0)}>
        <Image src="/branding/logo.png" alt="" width={571} height={659} priority className="h-6 w-auto" />
        <a href="mailto:hello@oguzhanozenc.me" className={`${label} text-ink hover:text-muted`}>
          Contact
        </a>
      </header>

      <section className="relative flex flex-1 items-center justify-center py-16">
        <span className={`intro-late absolute left-0 top-1/2 hidden -translate-y-1/2 sm:block ${label}`} style={step(1)}>
          Edition
          <br />
          026
        </span>

        <h1 className="char text-center text-[clamp(1.6rem,3.6vw,3.6rem)] font-normal uppercase leading-[1.04] tracking-[-0.01em]">
          <span className="intro-name block">Oğuzhan Özenç</span>
          <span className="sr-only">, </span>
          <span className="intro-line block" style={step(0)}>
            Creative <span className="accent">Developer</span>
          </span>
          <span className="intro-line block" style={step(1)}>
            <span className="italic">&amp;</span> Designer
          </span>
          <span className="intro-line block" style={step(2)}>
            Folio ©2026 <span className="accent">✳</span>
          </span>
        </h1>

        <span
          className={`intro-late absolute right-0 top-1/2 hidden -translate-y-1/2 text-right sm:block ${label}`}
          style={step(2)}
        >
          Selected work
          <br />
          Coming soon
        </span>
      </section>

      <footer className="intro-late grid gap-6 sm:grid-cols-12 sm:items-end" style={step(3)}>
        <p className="max-w-[42ch] text-[15px] leading-[1.45] tracking-[-0.005em] sm:col-span-6">
          Most websites explain a business. The good ones make you feel something about it first. I build the
          second kind, with identity, story and motion coming from one person.
        </p>
        <div className={`flex justify-between sm:col-span-6 sm:justify-end sm:gap-10 ${label}`}>
          <span className="sm:hidden">Edition 026</span>
          <span>
            <span className="mr-2 inline-block size-[7px] translate-y-[-1px] rounded-full bg-ink align-middle" />
            New site in progress
          </span>
        </div>
      </footer>
    </main>
  );
}
