import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
      id="Education"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I am a Software Engineer</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Education</motion.b>{" "}
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>University of Maryland Baltimore County</h2>
          <h2>Master of Science in Computer Science</h2>
          <h2>Aug 2022 – May 2024</h2>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sant Gadge Baba Amravati University</h2>
          <h2>Bachelor of Engineering in Information Technology</h2>
          <h2>Aug 2018 – May 2022</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
