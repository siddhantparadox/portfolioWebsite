import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Laboratory for Physical Sciences",
    job: "Graduate Research Assistant",
    desc: "At the Laboratory for Physical Sciences, I spearheaded the development of a machine learning-based malware detection system, leveraging Python and the Scipy library to process over a million samples for enhanced feature representation. This project not only improved detection accuracy by 30% over traditional methods but also honed my skills in data analysis, algorithm optimization, and machine learning, making me adept at tackling complex cybersecurity challenges. My ability to drive significant advancements in malware detection underscores my potential as a successful candidate for software engineering roles, particularly in security-focused applications.",
  },
  {
    id: 2,
    title: "Salute Hockey Academy",
    job: "Web Development Intern",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "As a Web Development Intern at Salute Hockey Academy, I led the redesign of their website, employing Agile methodologies and my expertise in HTML, CSS, and JavaScript to create a more engaging and user-friendly interface. This initiative resulted in a 200% increase in site engagement, demonstrating my capability to significantly improve user experience and operational efficiency through thoughtful UI/UX design and web development practices. My experience in transforming digital interfaces makes me a valuable asset for software engineering positions requiring strong front-end skills and a user-centric approach to project execution.",
  },
  {
    id: 3,
    title: "Freelance",
    job: "Freelance Software Engineer",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "In my freelance software engineering work, I successfully designed and deployed a variety of web solutions, including a custom website for a food truck business and comprehensive web development tutorials. Utilizing a wide range of technologies such as HTML, CSS, JavaScript, and Python, I demonstrated my versatility and ability to deliver tailored solutions that enhance digital presence and impart valuable technical skills to learners. My proactive approach to client collaboration and my knack for teaching complex concepts in an accessible manner highlight my strengths in communication, problem-solving, and adaptability, key traits for any successful software engineering professional.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Works">
      <div className="container" id="worksSection">
        <div className="wrapper">
          {/* <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />on 
          </div> */}
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <h3>{item.job}</h3>
            <p>{item.desc}</p>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/siddhantgupta4/",
                  "_blank"
                )
              }
            >
              Go to Linkedin
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Experiences</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
