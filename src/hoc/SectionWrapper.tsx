import { motion } from "framer-motion";

import { styles } from "../style";
import { fadeIn, staggerContainer } from "../utils/motion";


const StarWrapper = ({ Component }: any) =>

  function HOC() {
    return (
      <motion.section
        variants={fadeIn("", "", 0.1, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={""}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
