import React from "react";
import styles from "../animation.module.css";
import Project1 from "../projects/project1";
import Project2 from "../projects/project2";
import Project3 from "../projects/project3";
import Project4 from "../projects/project4";
import Service from "./service";

function Sections() {
  return (
    <>
      <div className="min-h-screen mt-[1500px]">
        <div className={styles.cardContainer}>
          <ul className={styles.cards}>
            <li className={styles.card1}>
              <div className={styles.card_body}>
                <Service />
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

export default Sections;

// import React from "react";
// import styles from "../animation.module.css";
// import Service from "./service";
// import SocialProof from "./socialProof";
// // import CallToAction from "./callToAction";

// export default function Sections() {
//   return (
//     <>
//       <div className="min-h-screen w-full">
//         <div>
//           <ul className={styles.cards}>
//             <li className={styles.card1}>
//               <div className={styles.card_body}>
//                 <Service />
//               </div>
//             </li>
//             <li className={styles.card2}>
//               <div className={styles.card_body}>
//                 <SocialProof />
//               </div>
//             </li>
//             {/* <li className={styles.card3}>
//               <div className={styles.card_body}>
//                 <CallToAction />
//               </div>
//             </li>
//             <li className={styles.card4}>
//               <div className={styles.card_body}>
//                 <CallToAction />
//               </div>
//             </li> */}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
