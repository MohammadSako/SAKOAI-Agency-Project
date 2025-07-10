"use client";

import Image from "next/image";
import React from "react";
import styles from "../animation.module.css";
import Link from "next/link";

function Project1() {
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.mohammadmurad.bookLibrary&hl=en_US";

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-center sm:gap-8 gap-2">
          <div className={styles.maktabati}>
            <Link
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-85"
            >
              <Image
                src={"/project1/p0.png"}
                alt="Maktabati"
                width={250}
                height={250}
                // quality={100}
                // sizes="100vw"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <div className={styles.ShawkatText}>
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-85"
              >
                <Image
                  src={"/project1/MaktabatiLogoWhite.png"}
                  alt="Maktabati Logo"
                  width={200}
                  height={200}
                  // quality={100}
                  // sizes="100vw"
                />
              </Link>
              <div className="space-y-2 flex flex-col justify-between">
                <div className="justify-start">
                  <p className="md:text-6xl text-5xl font-thin text-white">
                    Maktabati
                  </p>
                  <p className="md:text-2xl text-lg sm:text-xl text-white">
                    Book Library Mobile App
                  </p>
                  <p className="md:text-xl text-lg text-white">
                    React.js | React Native
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col gap-2 hidden sm:flex">
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-85"
              >
                <Image
                  src={"/project1/googleplay.avif"}
                  alt="Download on Google Play"
                  width={150}
                  height={150}
                  quality={100}
                  // sizes="100vw"
                />
              </Link>
              <p className="lg:text-4xl md:text-2xl sm:text-xl font-thin  text-white">
                Maktabati is available on Google Play
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:hidden">
          <Link
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-85"
          >
            <Image
              src={"/project1/googleplay.avif"}
              alt="Download on Google Play"
              width={150}
              height={150}
              quality={100}

              // sizes="100vw"
            />
          </Link>
          <p className="text-5xl font-thin text-white">
            Maktabati is available on Google Play
          </p>
        </div>
      </div>
    </>
  );
}

export default Project1;
