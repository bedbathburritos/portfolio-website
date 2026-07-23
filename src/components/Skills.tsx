import { motion } from "framer-motion";
import { skillGroups } from "../data/projects";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const tag = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
};

export default function Skills() {
  return (
    <section className="section section--skills" id="skills">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Skills</h2>
          <p className="section__subtitle">
            Production skills from shipped projects, professional work, and the
            Google Cybersecurity Professional Certificate.
          </p>
        </motion.div>

        <div className="skills">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                className="skills__group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1, duration: 0.5 }}
              >
                <h3 className="skills__label">
                  <Icon size={16} strokeWidth={2} />
                  {group.label}
                </h3>
                <motion.ul
                  className="skills__tags"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.tags.map((t) => (
                    <motion.li key={t} variants={tag} whileHover={{ scale: 1.08 }}>
                      {t}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
