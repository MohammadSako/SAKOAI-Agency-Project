import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Projects", href: "projects", current: false },
  { name: "About", href: "about", current: false },
  { name: "Contact", href: "contact", current: false },
  { name: "Feed", href: "feed", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white mt-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-sans lg:block hidden tracking-tight">
              Mohammad <span className="font-bold">Murad</span>
            </h1>
          </Link>

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <h1 className="sm:text-2xl text-3xl font-sans tracking-wide lg:invisible visible">
                  Mohammad <span className="font-bold">Murad</span>
                </h1>
              </Link>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex md:space-x-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "text-gray-900"
                          : "text-gray-400  hover:text-gray-900",
                        "rounded-md px-5 py-2 lg:text-xl text-lg font-medium"
                      )}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <DisclosureButton
                as="a"
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-xl font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
