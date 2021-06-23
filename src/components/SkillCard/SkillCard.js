import React, { forwardRef, useRef, useEffect } from "react";
import styles from "./SkillCard.module.css";

import { gsap, Power3 } from "gsap";

const SkillCard = forwardRef((props, ref) => {
  let logosRef = new Array(props.logos.length);

  useEffect(() => {
    let timeline = gsap.timeline({ repeat: -1 });

    for (let i = 0; i < logosRef.length; i++) {
      timeline.from(logosRef[i], {
        duration: 0.3,
        y: -20,
        opacity: 0,
        ease: Power3.easeOut,
      });

      timeline.to(logosRef[i], {
        duration: 0.5,
        y: 20,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 2,
      });
    }

    return () => {};
  }, []);

  return (
    <div ref={ref} className={`${styles.skill_card}`}>
      <div className={`${styles.logo_box}`}>
        {props.logos.map((logo, key) => {
          return (
            <img
              ref={(el) => (logosRef[key] = el)}
              src={`${process.env.PUBLIC_URL}/assets/images/skills/${logo}`}
              className={`${styles.logo}`}
              alt={props.name}
            />
          );
        })}
      </div>
      <div className={`${styles.content_box}`}>
        <h5>{props.name}</h5>
        <p>
          {props.items.map((item, key) => {
            return (
              <span key={key}>
                {item}&nbsp;{key < props.items.length - 1 && <>&#47; </>}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
});

// function SkillCard({ logos, name, items }) {
//   return (
//     <div className={`${styles.skill_card}`}>
//       <div className={`${styles.logo_box}`}>
//         <img
//           src={`${process.env.PUBLIC_URL}/assets/images/skills/${logos[0]}`}
//           className={`${styles.logo}`}
//           alt={name}
//         />
//       </div>
//       <div className={`${styles.content_box}`}>
//         <h5>{name}</h5>
//         <p>
//           {items.map((item, key) => {
//             return (
//               <span key={key}>
//                 {item}&nbsp;{key < items.length - 1 && <>&#47; </>}
//               </span>
//             );
//           })}
//         </p>
//       </div>
//     </div>
//   );
// }

export default SkillCard;
