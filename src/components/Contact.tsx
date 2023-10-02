import { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SendMessage } from "../utils/SendMessage";

const Contact = () => {

  const ref = useRef<any>()
  const { SendMessageHandler, IsLoading } = SendMessage(ref)

  return (
    <div
      className={`w-screen flex justify-center items-center`}
    >
      <motion.div
        variants={{}}
        className='flex-[0.75] bg-[#217985] p-8 rounded-2xl '
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={ref}
          onSubmit={SendMessageHandler}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='Name'
              placeholder="What's your good name?"
              className='bg-[#fff] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='Email'
              name='email'
              placeholder="What's your web address?"
              className='bg-[#fff] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='Message'
              placeholder='What you want to say?'
              className='bg-[#fff] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#fff] py-3 px-8 rounded-xl outline-none w-fit text-[#133337] font-bold shadow-md shadow-primary'
          >
            {IsLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact



