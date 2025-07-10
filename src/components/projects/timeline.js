"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../animation.module.css";

function TimeLine() {
  const timelineRef = useRef(null);
  const [memories, setMemories] = useState([
    {
      id: 1,
      title: "React Native",
      description: "A description of the first memory",
      imageUrl: "/memories/memory1.jpg",
    },
    {
      id: 2,
      title: "Milestone Achieved",
      description: "Reaching an important milestone",
      imageUrl: "/memories/memory2.jpg",
    },
    {
      id: 3,
      title: "New Discovery",
      description: "An exciting new finding",
      imageUrl: "/memories/memory3.jpg",
    },
    {
      id: 4,
      title: "Team Celebration",
      description: "Celebrating a team success",
      imageUrl: "/memories/memory4.jpg",
    },
    {
      id: 5,
      title: "Future Vision",
      description: "Planning for the future",
      imageUrl: "/memories/memory5.jpg",
    },
  ]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const memoryElements = timeline.querySelectorAll(".memory");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.memoryVisible);
          } else {
            entry.target.classList.remove(styles.memoryVisible);
          }
        });
      },
      { threshold: 0.5 }
    );

    memoryElements.forEach((memory) => observer.observe(memory));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center bg-white">
      <h2 className="text-4xl font-bold mb-8 text-black">BrainSave Timeline</h2>
      <div ref={timelineRef} className="relative w-full max-w-4xl">
        {/* <div className="absolute left-1/2 w-1 h-full bg-white transform -translate-x-1/2"></div> */}
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={`memory ${styles.memory} ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            } w-5/12 mb-12`}
          >
            <div className="bg-gray-100 rounded-lg p-6 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {memory.title}
              </h3>
              <p className="text-gray-600 mb-4">{memory.description}</p>
              <Image
                src={memory.imageUrl}
                alt={memory.title}
                width={400}
                height={300}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
