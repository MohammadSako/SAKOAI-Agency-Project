"use client";

import { useEffect, useRef } from "react";
import { animate, scroll } from "framer-motion";
import { RiVoiceAiFill } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";

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

  const services = [
    {
      id: "1",
      name: "Start converting more callers into loyal customers today!",
      icon: RiVoiceAiFill,
      iconcolor: "#2f6ee1",
      description:
        "Imagine having a smart, friendly receptionist who never misses a call.",
      styled:
        "bg-[#2f6ee1] shadow-2xl rounded-2xl p-2 m-10 max-w-md text-center tracking-tight text-lg font-mono font-bold text-pretty text-white sm:text-2xl",
    },
    {
      id: "2",
      name: "Breathe new life into your existing content.",
      icon: HiOutlineSparkles,
      iconcolor: "#9911ff",
      description:
        "We’ll help you repurpose what you already have into fresh, high-performing posts, so you get more reach with less effort.",
      styled:
        "bg-[#9911ff] shadow-2xl rounded-2xl p-2 m-10 max-w-md text-center tracking-tight text-lg font-mono font-bold text-pretty text-white sm:text-2xl",
    },
    {
      id: "3",
      name: "Bring Your AI App Idea to Life Fast!",
      icon: HiOutlineLightBulb,
      iconcolor: "#e1e150",
      description:
        "Got a brilliant idea? We’ll turn it into a fully working AI app in just 2-4 weeks.",
      styled:
        "bg-[#fafa82] shadow-2xl rounded-2xl p-2 m-10 max-w-md text-center tracking-tight text-lg font-mono font-bold text-pretty text-gray-900 sm:text-2xl",
    },
  ];

  return (
    <>
      <article id="services">
        <header>
          <h2>Our Services</h2>
        </header>
        <section className="img-group-container" ref={containerRef}>
          <div>
            <ul className="img-group">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li className="img-container " key={service.id}>
                    <div className="flex justify-center items-center p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
                      <Icon
                        className="h-32 w-32 text-sky-600"
                        color={service.iconcolor}
                      />
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                      <p className="text-2xl font-semibold tracking-tight text-balance sm:text-5xl">
                        {service.name}
                      </p>
                    </div>
                    <p className={service.styled}>{service.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <footer>
          <p>
            Photos by{" "}
            <a
              target="_blank"
              href="https://twitter.com/mattgperry"
              rel="noopener noreferrer"
            >
              Matt Perry
            </a>
          </p>
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
          height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .img-group-container {
          height: 3000vh;
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
    </>
  );
}
