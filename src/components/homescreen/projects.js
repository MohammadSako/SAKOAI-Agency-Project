import React from "react";
import styles from "../animation.module.css";
import Project1 from "../projects/project1";
import Project2 from "../projects/project2";
import Project3 from "../projects/project3";
import Project4 from "../projects/project4";

function Projects() {
  return (
    <>
      <div className="min-h-screen mt-[1500px]">
        <div className={styles.cardContainer}>
          <ul className={styles.cards}>
            <li className={styles.card1}>
              <div className={styles.card_body}>
                <Project1 />
              </div>
            </li>
            <li className={styles.card2}>
              <div className={styles.card_body}>
                <Project2 />
              </div>
            </li>
            <li className={styles.card3}>
              <div className={styles.card_body}>
              <Project3 />
              </div>
            </li>
            <li className={styles.card4}>
              <div className={styles.card_body}>
              <Project4 />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Projects;