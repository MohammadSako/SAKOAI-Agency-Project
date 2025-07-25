"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Landing() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="min-h-screen flex flex-col items-center gap-4 w-full overflow-hidden origin-center"
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
              <motion.section
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className=" flex flex-col items-center gap-4 w-full overflow-hidden origin-center"
              >
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="#call">
                    <div className="relative inline-block group">
                      <button className="relative flex items-center justify-center gap-4 py-2 px-4  bg-sky-600 text-3xl hover:bg-sky-700 text-white font-semibold rounded-full shadow-lg overflow-hidden transition duration-300">
                        <span className="relative z-10 flex items-center gap-4">
                          Start Now
                          <HiOutlineArrowRight className="text-4xl" />
                        </span>
                        <span className="shine"></span>
                      </button>
                    </div>
                  </Link>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
