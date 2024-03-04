import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {type === "services" ? (
        <h1 style={{ y: yText }}>Who am I?</h1>
      ) : (
        <>
          <h1 style={{ y: yText }}>
            <span>
              <a
                href="https://drive.google.com/file/d/1wAQv4cXlk5yCtK6JTkLGLrzprZfwpsMX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", zIndex: 1000 }}
                className="resume-link"
              >
                Résumé
              </a>
            </span>
          </h1>
        </>
      )}
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
