import Image from "next/image";
import { motion } from "framer-motion";

export const Sidebar = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.8, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="lg:fixed top-0 lg:bottom-0 lg:left-0 p-2 lg:w-1/3  w-full overflow-y-auto text-center bg-gray-900 flex items-center flex-col justify-center">
        <motion.div variants={stagger}>
          <Image
            width={400}
            height={400}
            alt="Animate"
            src="/calcAnimate.svg"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="text-gray-100 lg:text-5xl text-lg"
        >
          <div className="p-2.5 mt-1 flex items-center">
            <motion.h1 variants={fadeInUp} className="font-bold text-gray-200">
              Construction Cost Calculator
            </motion.h1>
          </div>
          <div className="p-2.5 mt-1 flex items-center">
            <span className="text-[15px] text-gray-200 m-auto">By</span>
          </div>
          <div className="p-2.5 flex items-center justify-center ">
            <h4 className="text-gray-200 lg:text-2xl text-base underline underline-offset-8 hover:bg-blue-600 rounded-md p-3">
              Emmanuel Otieno
            </h4>
          </div>
          {/* <div className="my-2 bg-gray-600 h-[1px]"></div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};
