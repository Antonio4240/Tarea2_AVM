"use client";

import React from "react";
import styles from "./Interest.module.css";

// 🎯 Tipo extendido para variables CSS
type CSSVars = React.CSSProperties & {
    '--card-color': string;
    '--jelly-scale': number;
    '--jelly-translate-x': string;
    '--jelly-translate-y': string;
};

// 🦑 Medusas con variaciones reales
const JellyfishBackground = ({ type }: { type: number }) => {

    const jellyVariants = {
        1: (
            <>
                <path d="M 25 40 Q 50 5 75 40 Q 50 60 25 40 Z" fill="currentColor" opacity="0.5" />
                <path d="M 35 45 Q 25 80 45 95" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M 60 45 Q 75 75 55 95" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M 45 50 Q 50 85 48 95" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
            </>
        ),
        2: (
            <>
                <ellipse cx="50" cy="35" rx="22" ry="15" fill="currentColor" opacity="0.4"/>
                <path d="M 40 45 Q 50 85 35 95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
                <path d="M 60 45 Q 50 85 65 95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
                <path d="M 50 45 Q 50 80 50 95" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
            </>
        ),
        3: (
            <>
                <path d="M 20 40 Q 50 15 80 40 Q 50 50 20 40 Z" fill="currentColor" opacity="0.3"/>
                <path d="M 30 45 Q 20 75 40 90" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.3"/>
                <path d="M 70 45 Q 80 75 60 90" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.3"/>
                <path d="M 50 45 Q 45 80 55 95" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25"/>
            </>
        )
    };

    return (
        <svg viewBox="0 0 100 100" className={styles.jellyfishSvg}>
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blurredAlpha" />
                    <feFlood floodColor="currentColor" floodOpacity="1" result="floodColor" />
                    <feComposite in="floodColor" in2="blurredAlpha" operator="in" result="coloredGlow" />
                    
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="coreAlpha" />
                    <feComposite in="floodColor" in2="coreAlpha" operator="in" result="coreGlow" />

                    <feMerge>
                        <feMergeNode in="coloredGlow" />
                        <feMergeNode in="coreGlow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <g filter="url(#glow)">
                {jellyVariants[type as 1 | 2 | 3]}
                
                {/* Partículas flotantes */}
                <circle cx="20" cy="20" r="2" fill="#fff" opacity="0.7" />
                <circle cx="80" cy="60" r="3" fill="#fff" opacity="0.5" />
                <circle cx="10" cy="70" r="1.5" fill="#fff" opacity="0.8" />
            </g>
        </svg>
    );
};

// 📂 Datos con variación real
const interestsData = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: "fas fa-code",
        color: "#00f3ff",
        desc: "HTML5, CSS3, JavaScript, frameworks modernos.",
        tags: ["React"],
        jellyType: 1,
        jellyScale: 1.1,
        jellyTx: '-30%',
        jellyTy: '10%'
    },
    {
        id: 2,
        title: "Ciberseguridad",
        icon: "fas fa-shield-halved",
        color: "#b026ff",
        desc: "Análisis de vulnerabilidades, pentesting.",
        tags: ["Seguridad Web"],
        jellyType: 2,
        jellyScale: 0.9,
        jellyTx: '25%',
        jellyTy: '-15%'
    },
    {
        id: 3,
        title: "Inteligencia Artificial",
        icon: "fas fa-brain",
        color: "#00ffaa",
        desc: "Machine Learning, soluciones inteligentes.",
        tags: ["Python", "ML"],
        jellyType: 3,
        jellyScale: 1.0,
        jellyTx: '15%',
        jellyTy: '20%'
    },
    {
        id: 4,
        title: "Bases de Datos",
        icon: "fas fa-database",
        color: "#ffaa00",
        desc: "Relacionales, NoSQL, optimización.",
        tags: ["MySQL", "NoSQL"],
        jellyType: 2,
        jellyScale: 0.8,
        jellyTx: '-25%',
        jellyTy: '-20%'
    },
    {
        id: 5,
        title: "Desarrollo Móvil",
        icon: "fas fa-mobile-screen-button",
        color: "#ff0073",
        desc: "Apps Android e iOS.",
        tags: ["Flutter", "Kotlin"],
        jellyType: 1,
        jellyScale: 1.2,
        jellyTx: '35%',
        jellyTy: '5%'
    },
    {
        id: 6,
        title: "Cloud Computing",
        icon: "fas fa-cloud",
        color: "#4facfe",
        desc: "Arquitecturas escalables.",
        tags: ["AWS", "Docker"],
        jellyType: 3,
        jellyScale: 1.0,
        jellyTx: '-10%',
        jellyTy: '-25%'
    }
];

export default function Interest() {

    // 🎯 Parallax corregido
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.setProperty('--mouse-x', `0px`);
        e.currentTarget.style.setProperty('--mouse-y', `0px`);
    };

    return (
        <section className={styles.interests} id="interests">
            <div className={`${styles.container} ${styles.nav}`}>
                
                <div className={styles.section__header}>
                    <span className={styles.section__subtitle}>Lo que me apasiona</span>
                    <h2 className={styles.section__title}>Intereses & Especialidades</h2>
                    <p className={styles.section__description}>
                        Áreas tecnológicas que me entusiasman
                    </p>
                </div>

                <div className={styles.interests__grid}>
                    {interestsData.map((item) => (
                        <article
                            key={item.id}
                            className={styles.interest__card}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                '--card-color': item.color,
                                '--jelly-scale': item.jellyScale,
                                '--jelly-translate-x': item.jellyTx,
                                '--jelly-translate-y': item.jellyTy
                            } as CSSVars}
                        >
                            <div className={styles['card-details']}>
                                <div className={styles.card__icon}>
                                    <i className={item.icon}></i>
                                </div>

                                <h3 className={styles.card__title}>{item.title}</h3>

                                <p className={styles.card__description}>
                                    {item.desc}
                                </p>

                                <div className={styles.card__tags}>
                                    {item.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles['card-design']}>
                                <JellyfishBackground type={item.jellyType} />
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}