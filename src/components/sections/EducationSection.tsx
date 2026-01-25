"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import styles from "./EducationSection.module.css";
import { FaGraduationCap } from "react-icons/fa";

const EducationSection = () => {
    return (
        <section className={styles.section} id="education">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className={styles.grid}>
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                                <FaGraduationCap />
                            </div>
                            <h3 className={styles.institution}>{edu.institution}</h3>
                            {edu.location && <div className={styles.location}>{edu.location}</div>}
                            <span className={styles.period}>{edu.period}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
