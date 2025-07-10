"use client";

import Image from "next/image";
import React from "react";
import styles from "../animation.module.css";
import Link from "next/link";

function Project2() {
  const Url =
    "https://shawkat-app.vercel.app/";
  return (
    <>
      <div>
        <div>
          <Link
            href={Url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-85"
          >
            <Image
              src={"/project2/apple2.png"}
              alt="Shawkat laptop"
              width={500}
              height={200}
              // quality={100}
              // sizes="100vw"
            />
          </Link>
        </div>

        <div className="grid justify-center text-center gap-4 pt-8">
          <div className={styles.ShawkatText}>
            <div>
              <Image
                src={"/project2/shawkatTextWhite.png"}
                alt="Shawkat Text"
                width={400}
                height={200}
                quality={100}
                // sizes="100vw"
              />
            </div>
            <div className="space-y-4">
              <p className="md:text-5xl text-4xl font-thin text-white tracking-tight">
                Library Application
              </p>
              <p className="md:text-3xl text-2xl text-white">
                Book Library App Project
              </p>
              <p className="md:text-xl text-lg text-white">
                React.js | Next.js | MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project2;
