import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-full text-center space-y-2">
        <h2 className="text-2xl font-bold text-sky-900 sm:text-3xl">
          Have Questions? We&#39;re Here to Help
        </h2>
        <p className="mt-2 sm:text-xl/8 text-lg text-gray-600">
          Feel free to reach out anytime, we`d love to hear from you!
        </p>
        <Link href={"mailto:mohammad.talal.murad@gmail.com"}>
          <p className="text-lg/8 font-sans text-gray-600 hover:text-gray-900">
            mohammad.talal.murad@gmail.com
          </p>
        </Link>
      </div>
    </div>
  );
}
