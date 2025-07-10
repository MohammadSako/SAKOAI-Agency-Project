"use client";

import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import ShineButton from "../UI/shineButton";

export default function SocialProof() {
  const socials = [
    {
      id: "1",
      title: "Ruslan Musaev",
      desc: "I highly recommend Mohammad as a dedicated and highly skilled professional. His commitment to continuous improvement and excellence is truly remarkable. He consistently demonstrates deep expertise in his field, tackling challenges with precision and efficiency. His ability to learn, adapt, and refine his skills makes him a valuable asset to any team.",
      position: "Frontend Developer",
    },
    {
      id: "2",
      title: "Faisal Jweihan",
      desc: "Mohammad is an outstanding full stack developer with expertise in React Native and Next.js. He consistently delivers top-quality work, creating high-performance mobile apps and scalable web solutions. Beyond his technical skills, Mohammad excels at problem-solving and stays current with industry trends. He’s a reliable team player and a strong communicator. I highly recommend Mohammad for any project needing a skilled and dedicated developer.",
      position: "Co-Founder & CEO at Unmirror Studio",
    },
    {
      id: "3",
      title: "Ruslan Musaev",
      desc: "I highly recommend Mohammad as a dedicated and highly skilled professional. His commitment to continuous improvement and excellence is truly remarkable. He consistently demonstrates deep expertise in his field, tackling challenges with precision and efficiency. His ability to learn, adapt, and refine his skills makes him a valuable asset to any team.",
      position: "Frontend Developer",
    },
    {
      id: "4",
      title: "Faisal Jweihan",
      desc: "Mohammad is an outstanding full stack developer with expertise in React Native and Next.js. He consistently delivers top-quality work, creating high-performance mobile apps and scalable web solutions. Beyond his technical skills, Mohammad excels at problem-solving and stays current with industry trends. He’s a reliable team player and a strong communicator. I highly recommend Mohammad for any project needing a skilled and dedicated developer.",
      position: "Co-Founder & CEO at Unmirror Studio",
    },
  ];
  return (
    <>
      <motion.section
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full px-2 py-10 sm:py-14 md:py-16 lg:py-0"
      >
        <div id="social-proof" className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Loved and trusted by amazing companies globally
              </h1>
            </div>

            <Carousel
              className="w-full"
              opts={{ align: "center", dragFree: true }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
            >
              <CarouselContent>
                {socials.map((social) => (
                  <CarouselItem key={social.id}>
                    <div className="mx-auto text-center max-w-xl sm:max-w-2xl lg:max-w-4xl">
                      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-300 font-mono">
                        {social.title}
                      </h2>
                      <figure className="mt-8 sm:mt-10">
                        <blockquote className="text-lg sm:text-xl font-sans md:text-2xl font-semibold text-white">
                          <p>{`“${social.desc}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-base">
                          <div className="font-semibold text-white">
                            {social.title}
                          </div>
                          <svg
                            width={4}
                            height={4}
                            viewBox="0 0 4 4"
                            aria-hidden="true"
                            className="fill-white hidden sm:inline"
                          >
                            <circle r={2} cx={2} cy={2} />
                          </svg>
                          <div className="text-white">{social.position}</div>
                        </figcaption>
                      </figure>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </motion.section>
    </>
  );
}
