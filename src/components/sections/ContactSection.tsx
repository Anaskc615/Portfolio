"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Let's Connect</h2>
                    <p className={styles.text}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className={styles.links}>
                        <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <FaLinkedin />
                        </a>
                        <a href={`mailto:${portfolioData.personal.email}`} className={styles.linkItem}>
                            <FaEnvelope />
                        </a>
                        <a href={`tel:${portfolioData.personal.phone}`} className={styles.linkItem}>
                            <FaPhone />
                        </a>
                    </div>

                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default ContactSection;
