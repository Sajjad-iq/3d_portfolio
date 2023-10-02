import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { projects } from "../constants";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  index: number
  name: string
  description: string
  tags: any
  image: any
  source_code_link: string,
  liveLink: string
}

const ProjectCard = (props: Props) => {
  return (
    <motion.div variants={{}}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#217985] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={props.image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(props.source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{props.name}</h3>
          <p className='mt-2 text-white text-[14px]'>{props.description}</p>
        </div>

        <div className='mt-5'>
          <a target={"_blank"} href={props.liveLink} className="blue-text-gradient text-white text-[14px]">Live Link</a>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {props.tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  const { ref, inView } = useInView({
    threshold: 0.1,
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
            duration: 0.6,
            delay: 0.6,
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
    <section id="work" ref={ref} className={`${styles.paddingX} pt-60 mx-auto w-fit`}>
      <motion.article animate={animation}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.article>

      <div className='w-full flex'>
        <motion.p
          animate={animation}
          className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center items-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works
