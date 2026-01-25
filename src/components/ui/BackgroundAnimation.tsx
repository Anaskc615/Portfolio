"use client";

import { useEffect, useState } from "react";
import styles from "./BackgroundAnimation.module.css";

const BackgroundAnimation = () => {
    const [meteors, setMeteors] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

    useEffect(() => {
        // Generate random meteors only on client side
        const meteorCount = 10;
        const newMeteors = new Array(meteorCount).fill(null).map(() => ({
            left: Math.floor(Math.random() * 100) + "%",
            top: Math.floor(Math.random() * 50) - 20 + "%", // Start slightly above or top half
            delay: Math.random() * 5 + "s",
            duration: Math.floor(Math.random() * 3 + 2) + "s",
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMeteors(newMeteors);
    }, []);

    return (
        <div className={styles.container}>
            {/* Ambient Blobs */}
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
            <div className={`${styles.blob} ${styles.blob3}`} />

            {/* Meteors (Running Animation) */}
            {meteors.map((meteor, idx) => (
                <span
                    key={idx}
                    className={styles.meteor}
                    style={{
                        left: meteor.left,
                        top: meteor.top,
                        animationDelay: meteor.delay,
                        animationDuration: meteor.duration,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundAnimation;
