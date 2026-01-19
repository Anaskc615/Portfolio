"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
    return (
        <section className={styles.section} id="projects">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className={styles.grid}>
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imagePlaceholder}>
                                {project.category === "Mobile" ? "📱" : project.category === "Web" ? "💻" : "⚙️"}
                            </div>
                            <div className={styles.content}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.technologies.map(tech => (
                                        <span key={tech} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
