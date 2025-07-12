"use client";

import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import CalBooking from "../UI/cal";

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center h-auto gap-4 w-full overflow-hidden origin-center"
    >
      <div id="call">
        <p className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl my-10">
          Book Your Consultation
        </p>
        <p className="text-center text-xl  tracking-tight text-gray-900 sm:text-2xl my-10">
          Book Your Consultation Let’s bring your ideas to life. Claim your free
          consultation and see how we can help you succeed.
        </p>
      </div>
      <CalBooking />
    </motion.section>
  );
}
