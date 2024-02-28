import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "Homepage",
    "Education",
    "Portfolio",
    "Works",
    "Contact",
    "Résumé",
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={
            item === "Résumé"
              ? "https://drive.google.com/file/d/16JoGzacFWGtDy8-XBjnaMAeBtMfJLzmz/view?usp=sharing"
              : `#${item}`
          }
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          target={item === "Résumé" ? "_blank" : "_self"}
          rel={item === "Résumé" ? "noopener noreferrer" : ""}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
