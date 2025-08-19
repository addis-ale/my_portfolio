/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";
import { FaDownload } from "react-icons/fa";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle font-semibold"
        >
          Hey There,
          <br />
          <span>I'm Addis!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2
            variants={awardVariants}
            className="font-bold text-xl text-teal-500"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p variants={awardVariants}>
            I build modern, user-friendly web applications from front to back.
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <div className="skill">
              <h3>Technologies I Use</h3>
              <div className="awardList">
                <motion.img
                  variants={awardVariants}
                  src="/skills/nextjs.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/react.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/tailwindcss.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/css.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/gsap.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/js.svg"
                  alt=""
                />
              </div>
              <div className="awardList">
                <motion.img
                  variants={awardVariants}
                  src="/skills/node.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/express.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/mongodb.png"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/postgress.png"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/ts.svg"
                  alt=""
                />
                <motion.img
                  variants={awardVariants}
                  src="/skills/reactQuery.svg"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.div
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/socials/ig.svg" alt="" />
            </a>
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/socials/linkedin.svg" alt="" />
            </a>
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/socials/tg.svg" alt="" />
            </a>
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>

        {/* BUBBLE */}
        <Speech />

        {/* CONTACT BUTTON */}
        <div className="download">
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="certificate w-full"
          >
            <a
              href="/AddisAlemayehu_CV.pdf"
              download
              className="flex items-center justify-center gap-2 text-white rounded-lg  transition w-full"
            >
              <FaDownload /> <span>Download CV</span>
            </a>
          </motion.div>
          <motion.a
            href="/#contact"
            className="contactLink"
            animate={{
              x: [200, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
            }}
          >
            <motion.div
              className="contactButton"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="circleText">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </motion.div>
          </motion.a>
        </div>
      </div>
      {/* <div></div> */}
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero_image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
