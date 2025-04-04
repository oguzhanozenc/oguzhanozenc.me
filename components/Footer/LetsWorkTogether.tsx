import Link from "next/link";
import { TbMessageChatbot } from "react-icons/tb";
import { Button, CopyButton } from "@/components/Button";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/Card";

export default function LetsWorkTogether() {
  return (
    <div className="flex flex-col">
      <Card>
        <CardHeader>Let’s work together.</CardHeader>
        <CardBody>To create products that tell stories.</CardBody>

        <CardFooter>
          {" "}
          <div className="flex flex-row mt-4 gap-4 items-center">
            <Link href="/contact">
              <Button variant="pulsating">
                Contact <TbMessageChatbot className="text-[1.2rem] ml-1" />
              </Button>
            </Link>
            or
            <CopyButton
              copyText="hello@oguzhanozenc.me"
              label="Email"
              className="sm secondary"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
