import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-full text-center space-y-4">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Have Questions? We&#39;re Here to Help
        </h2>
        <p className="mt-2 text-3xl/8 text-gray-600">
          Feel free to reach out anytime, we`d love to hear from you!
        </p>
        <Link href={"mailto:mohammad.talal.murad@gmail.com"}>
          <p className="mt-6 text-2xl/8 text-sky-900">
            mohammad.talal.murad@gmail.com
          </p>
        </Link>
      </div>
    </div>
  );
}
