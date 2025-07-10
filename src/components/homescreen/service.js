"use client";


import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { RiVoiceAiFill } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";

import { Inter } from "next/font/google";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    id: "AIVoiceAgents1",
    name: "AI Voice Agents",
    icon: RiVoiceAiFill,
    iconcolor: "#2f6ee1",

    description:
      "Turn more callers into happy clients with our smart AI receptionists.",
    description2:
      "Imagine having a smart, friendly receptionist who never misses a call. Our AI Voice Agents greet your clients, answer questions, and help book appointments — all while you focus on growing your business.",
    features: [
      {
        id: 1,
        feature: "Always answers the phone, day or night",
      },
      {
        id: 2,
        feature: "Chats with callers to qualify leads",
      },
      {
        id: 3,
        feature: "Books appointments for you, hassle-free",
      },
    ],
    featured: false,
  },
  {
    id: "ContentGeneration",
    name: "Content Generation",
    icon: HiOutlineSparkles,
    iconcolor: "#00adff",

    description:
      "Turn what you already have into fresh, high-performing content.",
    description2:
      "Breathe new life into your existing content. We’ll help you repurpose what you already have into fresh, high-performing posts, videos, and more so you get more reach with less effort.",
    features: [
      {
        id: 1,
        feature: "More content without lifting a finger",
      },
      {
        id: 2,
        feature: "5x more leads, effortlessly",
      },
    ],
    featured: false,
  },
  {
    id: "AIAppsDevelopment",
    name: "AI Apps Development",
    icon: HiOutlineLightBulb,
    iconcolor: "#e1e150",
    description: "Bring Your AI App Idea to Life Fast!",
    description2:
      "Got a brilliant idea? We’ll turn it into a fully working AI app in just 2-4 weeks. From chatbots to smart tools, we handle the heavy lifting so you can focus on your big vision.",
    features: [
      {
        id: 1,
        feature: "Sleek, modern designs",
      },
      {
        id: 2,
        feature: "Fully functional, ready to launch",
      },
    ],
    featured: false,
  },
];

export default function Service() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      id="services"
      // className="bg-white flex flex-col items-center h-auto gap-4 w-full overflow-hidden origin-center"
    >
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-20 lg:max-w-none lg:py-10 mt-6">
            <div className="lg:col-span-2">
              <h1
                className={` ${inter.className} text-4xl sm:tracking-tighter text-center text-gray-900 sm:text-3xl`}
              >
                <div className="mx-auto max-w-4xl text-center">
                  <p className="text-5xl font-bold tracking-tight text-balance text-white sm:text-6xl">
                    Our Services
                  </p>
                </div>
                <p className="mx-auto sm:mt-6 max-w-4xl text-center text-2xl font-medium text-pretty text-white sm:text-4xl/12">
                  <span className="text-blue-600 font-bold">Empower</span> Your
                  Business Growth with Cutting-Edge{" "}
                  <span className="text-blue-600 font-bold">AI</span> Solutions
                </p>
              </h1>
              <Carousel
                className="w-full max-w-fit sm:mt-4"
                opts={{ align: "center", dragFree: true }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
              >
                <CarouselContent>
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <CarouselItem
                        className="sm:max-w-fit max-w-xs sm:max-h-fit max-h-100 shadow-md p-10 m-5 rounded-2xl backdrop-brightness-90 backdrop-blur-sm bg-sky-50 hover:bg-sky-200/50 hover:shadow-lg transition duration-300 ease-in-out"
                        key={service.id}
                      >
                        <div className="group relative">
                          <div className="flex justify-center items-center p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
                            <Icon
                              className="h-20 w-20 text-sky-600"
                              color={service.iconcolor}
                            />
                          </div>
                          <div className="mx-auto max-w-4xl text-center">
                            <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-sky-800 sm:text-4xl">
                              {service.name}
                            </p>
                          </div>
                          <p className="mt-4 max-w-xl text-center text-lg font-medium text-pretty  sm:text-xl">
                            {service.description}
                          </p>
                          <p className="mt-4 max-w-xl text-center text-lg font-medium text-pretty  sm:text-xl">
                            {service.description2}
                          </p>
                          <div className="mt-4 max-w-2xl text-center text-lg font-medium text-pretty  sm:text-xl">
                            <ul className="mt-6 space-y-3 text-left">
                              {service.features.map((features) => (
                                <li
                                  className="flex items-center justify-center gap-3 text-gray-700"
                                  key={features.id}
                                >
                                  <p className="max-w-md text-lg sm:text-xl">
                                    {features.feature}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
