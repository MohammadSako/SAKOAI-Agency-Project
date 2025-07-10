"use client";

import { motion } from "framer-motion";
export default function Landing() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white " id="home">
        <div className=" isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#0cf6b8] to-[#fc89e9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <div className="mx-auto max-w-4xl py-20 sm:py-32 lg:py-38">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                From{" "}
                <span className="text-cyan-600 italic font-serif">Idea</span> to{" "}
                <span className="underline decoration-sky-500">Profitable</span>{" "}
                Product in <span className="text-pink-600 font-light">30</span>{" "}
                Days
              </h1>
              <p className="mt-8 text-3xl font-bold tracking-tight text-pretty text-gray-600 sm:text-4xl">
                Grow your business with{" "}
                <span className="text-cyan-600 font-sans font-Bold capitalize">
                  custom-built tools
                </span>{" "}
                and{" "}
                <span className="text-white font-bold text-4xl font-sans bg-sky-600 px-1 rounded-md">
                  AI
                </span>{" "}
                agents that bring in more leads delivered in{" "}
                <span className=" font-bold font-sans underline decoration-sky-500">
                  30
                </span>{" "}
                days or less.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
