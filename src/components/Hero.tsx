import { motion } from "framer-motion";

import { styles } from "../style";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <section
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 2
            }}
            className='w-5 h-5 rounded-full bg-[#3f7c84]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <article>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#217985]'>Sajjad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a JavaScript developer, I develop high  <br className='sm:block hidden' />
            performance web applications
          </p>
        </article>
      </section>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;