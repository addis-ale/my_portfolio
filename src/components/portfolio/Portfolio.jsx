/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const items = [
  {
    id: 1,
    img: "/projects/dd.png",
    title: "The Disruptors Den",
    desc: "A dynamic entrepreneurial community platform in Ethiopia that empowers innovators and startups through mentorship, workshops, and networking events.",
    liveLink: "https://www.thedisruptorsden.com/",
    githubLink: "https://github.com/addis-ale/Disruptors_Den",
    stack: [
      { name: "React", color: "#61DAFB", img: "/skills/react.svg" },
      { name: "Next.js", color: "#000000", img: "/skills/nextjs.svg" },
      { name: "TailwindCSS", color: "#06B6D4", img: "/skills/tailwindcss.svg" },
      { name: "Shadcn UI", color: "#000000", img: "/skills/shadcnui.svg" },
    ],
  },
  {
    id: 2,
    img: "/projects/consultant_hero.png",
    title: "Hero Consultancy",
    desc: "Hero Education & Job Consultancy is a web application designed to streamline the process of applying for jobs and scholarships. It provides users with a platform to search for and apply to various educational and career opportunities while tracking their application status.",
    liveLink: "https://heroconsultancy-kcip.vercel.app/",
    githubLink:
      "https://github.com/addis-ale/Hero-Educational-and-Job-Consultancy-",
    stack: [
      { name: "React", color: "#61DAFB", img: "/skills/react.svg" },
      { name: "Next.js", color: "#000000", img: "/skills/nextjs.svg" },
      { name: "TailwindCSS", color: "#06B6D4", img: "/skills/tailwindcss.svg" },
      { name: "Shadcn UI", color: "#000000", img: "/skills/shadcnui.svg" },
      { name: "Prisma", color: "#0F6CBD", img: "/skills/prisma.svg" },
      { name: "MongoDB", color: "#47A248", img: "/skills/mongodb.png" },
    ],
  },
  {
    id: 3,
    img: "/projects/dms_hero.png",
    title: "DMS",
    desc: "The Document Management System (DMS) is a full-stack application designed to manage categorized project reports such as monthly, weekly, quarterly, and annual reports. It enables admins to upload, update, and organize documents efficiently for construction and engineering projects. Built with React and Express.js, the system ensures smooth handling of documents with a scalable and maintainable structure.",
    liveLink: "https://dms-prod-e3ds.vercel.app/",
    githubLink: "https://github.com/addis-ale/DMS_prod",
    stack: [
      { name: "React", color: "#61DAFB", img: "/skills/react.svg" },
      { name: "Next.js", color: "#000000", img: "/skills/nextjs.svg" },
      { name: "TailwindCSS", color: "#06B6D4", img: "/skills/tailwindcss.svg" },
      { name: "Shadcn UI", color: "#000000", img: "/skills/shadcnui.svg" },
      { name: "Prisma", color: "#0F6CBD", img: "/skills/prisma.svg" },
      { name: "MongoDB", color: "#47A248", img: "/skills/mongodb.png" },
    ],
  },
  {
    id: 3,
    img: "/projects/mojito_hero.png",
    title: "Mojito Cocktail Menu",
    desc: "A visually engaging frontend project showcasing a cocktail menu. Built with Next.js, TailwindCSS, and GSAP animations to provide smooth, interactive UI elements and a responsive design. Perfect for demonstrating modern frontend skills.",
    liveLink: "https://mojito-ten-pi.vercel.app/",
    githubLink: "https://github.com/addis-ale/mojito",
    stack: [
      { name: "TailwindCSS", color: "#06B6D4", img: "/skills/tailwindcss.svg" },
      { name: "GSAP", color: "#88CE02", img: "/skills/gsap.svg" },
      { name: "React", color: "#61DAFB", img: "/skills/react.svg" },
    ],
  },
  {
    id: 5,
    img: "/projects/gyp_app.png",
    title: "Gold Gym Website",
    desc: "A modern, responsive frontend website for a gym, built with React. Utilizes modular CSS for scalable styling and Framer Motion for smooth animations and interactive UI components.",
    liveLink: "https://gold-gym-app-07.netlify.app/",
    githubLink: "https://github.com/addis-ale/gym-app",
    stack: [
      { name: "React", color: "#61DAFB", img: "/skills/react.svg" },
      { name: "Modular CSS", color: "#FF6F61", img: "/skills/css.svg" },
      {
        name: "Framer Motion",
        color: "#0055FF",
        img: "/skills/framer.svg",
      },
    ],
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants} className="font-semibold">
          {item.title}
        </motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <div className="flex items-center gap-2">
          {item.stack.map((tech) => {
            return (
              <div key={tech.name} className="flex items-center gap-2">
                <img src={tech.img} alt={tech.name} height={24} width={24} />
                <span className="text-sm">{tech.name}</span>
              </div>
            );
          })}
        </div>
        <motion.div variants={textVariants}>
          <div className="flex items-center gap-4">
            <a href={item.liveLink} target="_blank">
              <button className="flex items-center gap-2 bg-teal-500">
                <FiExternalLink /> Live Demo
              </button>
            </a>
            <a href={item.githubLink} target="_blank">
              <button className="flex items-center gap-2 bg-black">
                <FaGithub size={24} />
                View Project
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
