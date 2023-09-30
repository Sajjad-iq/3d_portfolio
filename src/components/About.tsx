import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
  title: string
  icon: any,
  inView: boolean
}

const ServiceCard = (props: Props) => {

  const animation = useAnimation()

  useEffect(() => {
    if (!props.inView) {
      animation.start({
        x: 0,
        opacity: 0
      })
    } else if (props.inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 1.5,
          duration: 0.80,
          ease: "easeOut",
        },
      })
    }
  }, [props.inView])

  return (
    < Tilt className='xs:w-[250px] w-full ' >
      <motion.div
        animate={animation}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-[#217985] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={props.icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {props.title}
          </h3>
        </div>
      </motion.div>
    </Tilt >
  );
}



const About = () => {

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation()

  useEffect(() => {
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
    } else {
      animation.start({
        y: -50,
        opacity: 0,
      })
    }
  }, [inView])


  return (
    <section id="about" ref={ref} className={`${styles.paddingX} pt-20 mx-auto w-fit`}>
      <motion.div
        animate={animation}
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        animate={animation}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled front-end developer with experience in frameworks like React JS and front-end Development systems in general like  CSS preprocessing and CSS fame works and debugging and performance metrics and web security, I'm a quick learner and flexible and passionate. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service) => (
          <ServiceCard inView={inView} key={service.title} {...service} />
        ))}
      </div>
    </section >
  );
};

export default About;
