import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Puzzle: React.FC = () => {
  const containerControls = useAnimation();

  const [sectionRef, inView] = useInView({
    triggerOnce: false, // Trigger animation on every enter
    threshold: 0.1, // Adjust as needed
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6, duration: 1.2, ease: "easeInOut" },
    },
  };

  const topPuzzleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bottomPuzzleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  React.useEffect(() => {
    if (inView) {
      containerControls.start("visible");
    } else {
      containerControls.start("hidden");
    }
  }, [inView, containerControls]);

  return (
    <div
      ref={sectionRef}
      className="mx-auto flex max-w-screen-xl items-center justify-center  py-12"
    >
      <motion.div
        className="mx-auto flex flex-col"
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
      >
        <motion.div className=" mx-auto w-11/12">
          <motion.img
            src="./img/cards/svg/puzzle-top.svg"
            alt="Top Puzzle"
            width="200"
            height="200"
            variants={topPuzzleVariants}
            className="w-full"
          />
          <motion.img
            src="./img/cards/svg/puzzle-back.svg"
            alt="Bottom Puzzle"
            width="200"
            height="200"
            variants={bottomPuzzleVariants}
            className="-mt-20 w-full md:-mt-24"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Puzzle;
