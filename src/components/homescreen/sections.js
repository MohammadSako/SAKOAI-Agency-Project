import React from "react";
import styles from "../animation.module.css";
import SocialProof from "../Sections/socialProof";
import Logos from "../Sections/logos";
import States from "../Sections/states";

function Sections() {
  return (
    <>
      <div className="min-h-screen">
        <div className={styles.cardContainer}>
          <ul>
            <li className={styles.card1}>
              <div className={styles.card_body}>
                <SocialProof />
              </div>
            </li>
            <li className={styles.card2}>
              <div className={styles.card_body}>
                <Logos />
              </div>
            </li>
            <li className={styles.card3}>
              <div className={styles.card_body}>
                <States />
              </div>
            </li>
            <li className={styles.card4}>
              <div className={styles.card_body}>{/* <Project4 /> */}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sections;
