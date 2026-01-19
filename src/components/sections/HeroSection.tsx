"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone, FaAndroid } from "react-icons/fa";
import { SiFlutter, SiDart, SiKotlin } from "react-icons/si";
import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const { personal } = portfolioData;
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Typewriter effect state
    const [roleText, setRoleText] = useState("");
    const fullText = "Flutter Developer";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setRoleText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className={styles.section}>
            {/* Ambient Background */}
            <div className={styles.gridBackground} />
            <div className={styles.glow} />

            <div className={styles.container}>
                {/* Content Side */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ y: y1 }} // Parallax effect
                >
                    <motion.div variants={itemVariants} className={styles.badgeContainer}>
                        <div className={styles.badge}>
                            <div className={styles.badgeDot} />
                            Portfolio 2024
                        </div>
                    </motion.div>

                    <motion.span variants={itemVariants} className={styles.greeting}>
                        Hello, I'm
                    </motion.span>

                    <motion.h1 variants={itemVariants} className={styles.name}>
                        {personal.name}
                    </motion.h1>

                    <motion.div variants={itemVariants} className={styles.roleWrapper}>
                        <h2 className={styles.role}>
                            {roleText}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                            >
                                |
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.p variants={itemVariants} className={styles.summary}>
                        With over five years of dedicated experience as an Android & Flutter Developer, I specialize in the creation and maintenance of scalable, user-centric mobile applications.
                        <br />
                        <span className="text-[var(--accent-primary)] mt-2 block">Specialized in scalable mobile applications and user-centric experiences.</span>
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.ctaGroup}>
                        <a href={`mailto:${personal.email}`} className={styles.btnPrimary}>
                            Hire Me
                        </a>
                        <a href="#projects" className={styles.btnSecondary}>
                            View Work
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-6 text-2xl text-[var(--text-secondary)]">
                        <SocialLink href={personal.linkedin} icon={<FaLinkedin />} delay={0.1} />
                        <SocialLink href={`mailto:${personal.email}`} icon={<FaEnvelope />} delay={0.2} />
                        <SocialLink href={`tel:${personal.phone}`} icon={<FaPhone />} delay={0.3} />
                    </motion.div>
                </motion.div>

                {/* Visual Side (3D Model) */}
                <motion.div
                    className={styles.visualContainer}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: -15 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ y: y2 }}
                >
                    {/* The Phone */}
                    <motion.div
                        className={styles.phoneModel}
                        animate={{
                            rotateY: [-15, -5, -15],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <div className={styles.screen}>
                            <div className={styles.screenHeader}>
                                <div className={styles.notch} />
                            </div>
                            <div className={styles.screenBody}>
                                <div className={styles.appCard} />
                                <div className={styles.appCard} />
                                <div className={styles.appCard} />
                            </div>
                        </div>

                        {/* Floating Tech Icons */}
                        <motion.div className={`${styles.floatIcon} ${styles.floatIcon1}`}
                            animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <SiFlutter />
                        </motion.div>
                        <motion.div className={`${styles.floatIcon} ${styles.floatIcon2}`}
                            animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        >
                            <FaAndroid />
                        </motion.div>
                        <motion.div className={`${styles.floatIcon} ${styles.floatIcon3}`}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <SiDart />
                        </motion.div>

                        {/* Floating Code Snippet */}
                        <motion.div
                            className={`${styles.codeSnippet} ${styles.codeSnippet1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, x: [0, -10, 0] }}
                            transition={{ delay: 1, duration: 5, repeat: Infinity }}
                        >
                            {`class Portfolio extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AnasScreen(),
    );
  }
}`}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, delay }: { href: string; icon: React.ReactNode; delay: number }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: "var(--accent-primary)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + delay }}
    >
        {icon}
    </motion.a>
);

export default HeroSection;
