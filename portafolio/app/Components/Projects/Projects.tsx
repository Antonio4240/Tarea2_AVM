"use client";

import React from "react";
import Link from "next/link";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Plataforma de comercio electrónico con carrito de compras, autenticación de usuarios y pasarela de pagos integrada.",
    tech: ["React", "Node.js", "MongoDB"],
    colorClass: styles.box1
  },
  {
    title: "Dashboard Analytics",
    desc: "Panel de control interactivo para visualización de datos con gráficos dinámicos y reportes automatizados.",
    tech: ["Python", "Django", "Chart.js"],
    colorClass: styles.box2
  },
  {
    title: "AI Chatbot Assistant",
    desc: "Asistente virtual inteligente con procesamiento de lenguaje natural y respuestas contextuales.",
    tech: ["Python", "TensorFlow", "Flask"],
    colorClass: styles.box3
  }
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">

      <div className={styles.section__header}>
        <span className={styles.section__subtitle}>Mi trabajo</span>
        <h2 className={styles.section__title}>Proyectos Destacados</h2>
        <p className={styles.section__description}>
          Una selección de proyectos que demuestran mis habilidades
        </p>
      </div>

      {/* 🔥 CONTENEDOR ORIGINAL */}
      <div className={styles.container}>

        {projects.map((p, i) => (
          <div key={i} className={`${styles.box} ${p.colorClass}`}>

            {/* EFECTO CUADROS */}
            <span></span>

            {/* CONTENIDO */}
            <div className={styles.content}>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>

              <div className={styles.tech}>
                {p.tech.map((t, i) => (
                 <span key={i} className={`${styles.badge} ${styles["pos" + i]}`}>
                    {t}
                </span>
                     ))}
                </div>

              <div className={styles.links}>
                <Link href="#">Read more</Link>
                <Link href="#">GitHub</Link>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}