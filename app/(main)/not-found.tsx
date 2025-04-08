import Link from "next/link";
import Button from "@/components/Button/Button";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
