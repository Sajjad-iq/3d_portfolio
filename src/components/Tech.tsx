
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../style";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Tech = () => {

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) {
      if (inView) {
        animation.start({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1,
            delay: 0.8,
          }
        })
        setIsActive(true)
      } else {
        animation.start({
          y: -50,
          opacity: 0,
        })
      }
    }

  }, [inView])


  return (
    <section ref={ref} className={`flex items-center flex-col  justify-center pt-60 ${styles.paddingX} w-fit`}>

      <motion.article animate={animation}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Learned
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.article>

      <section className={`flex flex-row flex-wrap justify-center gap-10 pt-20 ${styles.paddingX} w-fit`}>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </section>

    </section>
  );
};

export default Tech