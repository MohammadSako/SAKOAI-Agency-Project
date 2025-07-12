"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="flex flex-col items-center h-auto gap-4 w-full" id="call">
      <motion.section
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className=""
      >
        <div>
          <p className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl my-20">
            Book Your Consultation
          </p>
          <p className="text-center text-xl  tracking-tight text-gray-900 sm:text-2xl my-10">
            Book Your Consultation Let’s bring your ideas to life. Claim your
            free consultation and see how we can help you succeed.
          </p>
        </div>
      </motion.section>
      <Cal
        namespace="30min"
        calLink="muhammad-murad-91cqig/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
