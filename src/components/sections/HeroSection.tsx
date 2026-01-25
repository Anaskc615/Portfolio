"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaLinkedin, FaEnvelope, FaPhone, FaAndroid, FaReact } from "react-icons/fa";
import { SiFlutter, SiDart, SiNextdotjs } from "react-icons/si";
import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";
import BackgroundAnimation from "../ui/BackgroundAnimation";

const HeroSection = () => {
    const { personal } = portfolioData;
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Role switcher state
    const roles = ["Flutter Developer", "Frontend Engineer"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    };

    return (
        <section className={styles.section}>
            <BackgroundAnimation />

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
                            Portfolio 2026
                        </div>
                    </motion.div>

                    <motion.span variants={itemVariants} className={styles.greeting}>
                        Hello, I&apos;m
                    </motion.span>

                    <motion.h1 variants={itemVariants} className={styles.name}>
                        {personal.name}
                    </motion.h1>

                    <motion.div variants={itemVariants} className={styles.roleWrapper}>
                        <h2 className={styles.role}>
                            <motion.span
                                key={currentRole}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: 'inline-block' }}
                            >
                                {roles[currentRole]}
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.p variants={itemVariants} className={styles.summary}>
                        Senior Flutter Developer & Frontend Engineer with 5+ years of experience building scalable mobile and web applications using Flutter, Next.js, and modern tech stacks.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.ctaGroup}>
                        <a href={`mailto:${personal.email}`} className={styles.btnPrimary}>
                            Hire Me
                        </a>
                        <a href="#projects" className={styles.btnSecondary}>
                            View Work
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className={styles.socials}>
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
                    {/* Browser Window (Frontend) */}
                    <motion.div
                        className={styles.browserWindow}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <div className={styles.browserHeader}>
                            <div className={styles.browserDot} style={{ background: '#ff5f56' }} />
                            <div className={styles.browserDot} style={{ background: '#ffbd2e' }} />
                            <div className={styles.browserDot} style={{ background: '#27c93f' }} />
                            <div style={{ marginLeft: 'auto', width: '40%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }} />
                        </div>
                        <div className={styles.browserBody}>
                            {/* Simulated Web UI */}
                            <div className={styles.webHeader}>
                                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <div style={{ width: 60, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                                    <div style={{ width: 60, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                                </div>
                            </div>

                            <div className={styles.webHero} />

                            <div className={styles.webGrid}>
                                <div className={styles.webCard} />
                                <div className={styles.webCard} />
                                <div className={styles.webCard} />
                                <div className={styles.webCard} />
                            </div>

                            {/* Floating React Icon */}
                            <motion.div
                                className={`${styles.webIconFloat} ${styles.webIcon1}`}
                                animate={{ y: [0, -10, 0], rotate: [0, 360] }}
                                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
                            >
                                <FaReact />
                            </motion.div>

                            {/* Floating Next.js Icon */}
                            <motion.div
                                className={`${styles.webIconFloat} ${styles.webIcon2}`}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <SiNextdotjs />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* The Phone (Mobile) */}
                    <motion.div
                        className={styles.phoneModel}
                        style={{ position: 'relative', zIndex: 10, transform: 'translateX(60px)' }} // Moved slightly more right
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
                                <div className={styles.appCard}>
                                    <div className={styles.appCardIcon} />
                                    <div className={styles.appCardLine} />
                                </div>
                                <div className={styles.appCard}>
                                    <div className={styles.appCardIcon} style={{ background: 'var(--accent-secondary)' }} />
                                    <div style={{ flex: 1 }}>
                                        <div className={styles.appCardLine} style={{ marginBottom: 8 }} />
                                        <div className={styles.appCardLine} style={{ width: '60%' }} />
                                    </div>
                                </div>
                                <div className={styles.appCard}>
                                    <div className={styles.appCardIcon} style={{ background: '#fff' }} />
                                    <div className={styles.appCardLine} />
                                </div>
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
        className={styles.socialIcon}
        whileHover={{ scale: 1.2, color: "var(--accent-primary)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + delay }}
    >
        {icon}
    </motion.a>
);

export default HeroSection;
