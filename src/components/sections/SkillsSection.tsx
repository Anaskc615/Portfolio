"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import styles from "./SkillsSection.module.css";
import { FaAndroid, FaJava, FaReact, FaDatabase, FaCode } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiDart, SiNextdotjs, SiGo } from "react-icons/si";

// Map skills to icons
const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("android")) return <FaAndroid />;
    if (s.includes("flutter")) return <SiFlutter />;
    if (s.includes("react")) return <FaReact />;
    if (s.includes("next")) return <SiNextdotjs />;
    if (s.includes("kotlin")) return <SiKotlin />;
    if (s.includes("java")) return <FaJava />;
    if (s.includes("dart")) return <SiDart />;
    if (s.includes("sql") || s.includes("database")) return <FaDatabase />;
    if (s.includes("go")) return <SiGo />;
    return <FaCode />;
};

const SkillsSection = () => {
    return (
        <section className={styles.section} id="skills">
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className={styles.grid}>
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className={styles.skillCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={styles.icon}>{getSkillIcon(skill)}</div>
                            <span className={styles.name}>{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
