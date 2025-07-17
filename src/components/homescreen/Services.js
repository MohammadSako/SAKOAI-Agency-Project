"use client";

import { useEffect, useRef } from "react";
import { animate, scroll } from "framer-motion";
import { RiVoiceAiFill } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import ShineButton from "../UI/shineButton";
import Sphare from "../sphare";
import Link from "next/link";

export default function Services() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const progress = progressRef.current;
    const items = container.querySelectorAll(".img-container");
    scroll(
      animate(container.querySelector(".img-group"), {
        transform: ["none", `translateX(-${(items.length - 1) * 100}vw)`],
      }),
      { target: container }
    );
    scroll(animate(progress, { scaleX: [0, 1] }), { target: container });
  }, []);

  const commonNameStyles =
    "text-4xl font-semibold tracking-tight text-balance sm:text-6xl";
  const commonDescStyles =
    "rounded-xl bg-white lg:p-4 p-2 mx-auto mt-4 lg:max-w-lg max-w-sm font-semibold tracking-wide lg:text-4xl text-lg font-bold text-pretty text-sky-700 sm:text-2xl";

  const services = [
    {
      id: "1",
      name: "Start converting more callers into loyal customers today!",
      icon: RiVoiceAiFill,
      iconcolor: "#2f6ee1",
      description:
        "Imagine having a smart, friendly receptionist who never misses a call.",
      nameStyled: commonNameStyles,
      descriptionStyled: commonDescStyles,
    },
    {
      id: "2",
      name: "Breathe new life into your existing content.",
      icon: HiOutlineSparkles,
      iconcolor: "#9911ff",
      description:
        "We’ll help you repurpose what you already have into fresh, high-performing posts, so you get more reach with less effort.",
      nameStyled: commonNameStyles,
      descriptionStyled: commonDescStyles,
    },
    {
      id: "3",
      name: "Bring Your AI App Idea to Life Fast!",
      icon: HiOutlineLightBulb,
      iconcolor: "#e1e150",
      description:
        "Got a brilliant idea? We’ll turn it into a fully working AI app in just 2-4 weeks.",
      nameStyled: commonNameStyles,
      descriptionStyled: commonDescStyles,
    },
  ];

  return (
    <div id="services">
      <article>
        <header>
          <p className="text-7xl  font-sans font-bold tracking-tight text-balance mt-20">
            Our Services
          </p>
        </header>
        <section className="img-group-container" ref={containerRef}>
          <div>
            <ul className="img-group">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li
                    className="img-container 2xl:max-w-2xl 2xl:ml-[665px] xl:max-w-xl xl:ml-[500px] lg:max-w-lg lg:ml-[250px] md:max-w-xl md:ml-[150px] sm:max-w-lg sm:ml-[130px] xs:max-w-sm xs:ml-[105px] max-w-xs ml-[63px] "
                    key={service.id}
                  >
                    <div className="flex justify-center items-center p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
                      <Icon
                        className="h-28 w-28 text-sky-600"
                        color={service.iconcolor}
                      />
                    </div>
                    <div className="mx-auto lg:max-w-xl max-w-xl text-center font-sans">
                      <p className={service.nameStyled}>{service.name}</p>
                      <p className={service.descriptionStyled}>
                        {service.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <div className="flex inset-0 z-10 pointer-events-none">
          <Sphare />
        </div>
        <footer>
          <div className="flex flex-col mx-auto lg:max-w-6xl max-w-2xl text-center gap-4 pb-20">
            <p className="text-6xl font-semibold tracking-tight text-balance font-serif">
              Book Your Consultation
            </p>
            <p className="text-4xl font-thin tracking-tight text-balance font-mono">
              Transform your ideas into reality
            </p>
            <p className="text-4xl font-thin tracking-tight text-balance font-mono text-sky-700">
              Schedule a free consultation with our team today
            </p>
            <Link href="#call">
              <ShineButton
                title="Start Now"
                bgcolor="#0084d1"
                textColor="white"
              />
            </Link>
          </div>
        </footer>
      </article>
      <div className="progress" ref={progressRef}></div>

      <style jsx>{`
        #services {
          width: 98vw;
        }

        #services h3 {
          font-family: "Azeret Mono", monospace;
        }

        #services header,
        #services footer {
          // height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .img-group-container {
          height: 700vh;
          position: relative;
        }

        .img-group-container > div {
          position: sticky;
          top: 0;
          overflow: hidden;
          height: 100vh;
        }

        .img-group {
          display: flex;
        }

        .img-container {
          display: flex;
          width: 100vw;
          height: 100vh;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        #services header h2 {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2;
          text-align: center;
          margin: 0;
        }

        .img-container h3 {
          margin: 0;
          font-size: 50px;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2;
          position: relative;
          bottom: 30px;
          display: inline-block;
        }

        .img-container img {
          width: 300px;
          height: 400px;
        }

        .progress {
          position: fixed;
          left: 0;
          right: 0;
          height: 5px;
          background: #9911ff;
          bottom: 50px;
          transform: scaleX(0);
        }
      `}</style>
    </div>
  );
}