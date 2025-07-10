import React from "react";
import styles from "../animation.module.css";
import Service from "./service";
import SocialProof from "./socialProof";
// import CallToAction from "./callToAction";

export default function Sections() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div>
          <ul className={styles.cards}>
            <li className={styles.card1}>
              <div className={styles.card_body}>
                <Service />
              </div>
            </li>
            <li className={styles.card2}>
              <div className={styles.card_body}>
                <SocialProof />
              </div>
            </li>
            {/* <li className={styles.card3}>
              <div className={styles.card_body}>
                <CallToAction />
              </div>
            </li>
            <li className={styles.card4}>
              <div className={styles.card_body}>
                <CallToAction />
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
