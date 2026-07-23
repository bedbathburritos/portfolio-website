import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <motion.a
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="project-card__inner"
        whileHover={{ rotateX: 2, rotateY: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={`project-card__visual ${project.gradientClass}`}>
          <motion.div
            className="project-card__icon-wrap"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            <Icon size={48} strokeWidth={1.5} />
          </motion.div>
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <span className="project-card__link">
            {project.linkLabel}
            <ArrowUpRight size={16} className="project-card__link-icon" />
          </span>
        </div>
      </motion.div>
    </motion.a>
  );
}
