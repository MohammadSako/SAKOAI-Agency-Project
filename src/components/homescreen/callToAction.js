"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex bg-blue-50 flex-col items-center h-auto gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-blue-500" id="social-proof">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-20 lg:max-w-none lg:py-10 mt-6">
            <div className="lg:col-span-2">
              <h1 className="text-4xl  tracking-tighter text-center text-gray-900 sm:text-3xl">
                {/* {t("common.discount")} */}
              </h1>
              <Carousel
                className="w-full max-w-fit mt-4"
                opts={{ align: "center", dragFree: true }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className="mx-auto text-center max-w-2xl lg:max-w-4xl">
                      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        Call to Action
                      </h1>

                      <figure className="mt-10">
                        <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                          <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo expedita voluptas culpa sapiente alias
                            molestiae. Numquam corrupti in laborum sed rerum et
                            corporis.”
                          </p>
                        </blockquote>
                        <figcaption className="mt-10">
                          {/* <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            /> */}
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">
                              Judith Black
                            </div>
                            <svg
                              width={3}
                              height={3}
                              viewBox="0 0 2 2"
                              aria-hidden="true"
                              className="fill-gray-900"
                            >
                              <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">
                              CEO of Workcation
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
