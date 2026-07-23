import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero__noise" aria-hidden="true" />
      <div className="hero__blobs" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <span className="hero__blob hero__blob--3" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__avatar-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__avatar-ring" aria-hidden="true" />
          <img
            className="hero__avatar"
            src="/assets/img/headshot.jpeg"
            alt="Tanner Smith"
          />
        </motion.div>

        <motion.p
          className="hero__eyebrow"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Full Stack Web Developer
        </motion.p>

        <motion.h1
          className="hero__title"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Tanner Smith
        </motion.h1>

        <motion.p
          className="hero__tagline"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          I build products that solve real problems — from live music platforms to
          privacy-first civic tools.
        </motion.p>

        <motion.a
          className="btn btn--primary hero__cta"
          href="#work"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          See my work
          <ArrowDown size={20} className="btn__arrow" />
        </motion.a>
      </div>
    </header>
  );
}
