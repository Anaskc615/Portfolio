"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
    return (
        <section className={styles.section} id="experience">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div className={styles.timeline}>
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={styles.item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.dot} />
                            <div className={styles.card}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <div className={styles.headerRow}>
                                    <div className={styles.company}>{exp.company}</div>
                                    {exp.location && <span className={styles.location}>{exp.location}</span>}
                                </div>
                                <span className={styles.period}>{exp.period}</span>

                                <ul className={styles.descList}>
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className={styles.descItem}>{desc}</li>
                                    ))}
                                </ul>

                                {exp.technologies && (
                                    <div className={styles.techStack}>
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className={styles.techBadge}>{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
