/* eslint-disable no-unused-vars */
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <>
      <motion.div
        className="bubbleContainer"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="bubble">
          <TypeAnimation
            sequence={[
              1000, // wait 1 second before typing
              "Hi, I'm Addis 👋",
              1000,
              "I'm a Full Stack Developer",
              1000,
              "I build modern web apps with React, Next.js, and Node.js",
              1000,
              "Passionate about clean code, performance, and great UX",
              2000,
            ]}
            wrapper="span"
            speed={40}
            deletionSpeed={60}
            repeat={Infinity}
          />
        </div>
        <img src="/hero_image.png" alt="" />
      </motion.div>
    </>
  );
};

export default Speech;
