import ContactForm from "@/app/(main)/contact/components/ContactForm";

export const metadata = {
  title: "Contact – Oguzhan Ozenc | Frontend Developer",
  description:
    "Interested in collaborating or working together? Reach out to Oguzhan Ozenc — a frontend developer based in Istanbul, open to remote opportunities worldwide.",
  openGraph: {
    title: "Contact – Oguzhan Ozenc | Frontend Developer",
    description:
      "Let's build products that tell stories. Contact Oguzhan Ozenc to discuss web development, React projects, or potential collaborations.",
    url: "https://oguzhanozenc.me/contact",
    siteName: "Oguzhan Ozenc",
    images: [
      {
        url: "https://oguzhanozenc.me/branding/oguzhanozenc.jpg",
        width: 1200,
        height: 630,
        alt: "Oguzhan Ozenc – Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Oguzhan Ozenc | Frontend Developer",
    description:
      "Frontend developer open to remote collaboration, freelance projects, and product-driven work. Let’s connect.",
    images: ["https://oguzhanozenc.me/branding/oguzhanozenc.jpg"],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
