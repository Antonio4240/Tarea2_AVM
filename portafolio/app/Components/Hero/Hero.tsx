
import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero(){
    return(
        <section className={styles.hero} id="home">
            <div className={`container ${styles.nav}`}>
                <div className="hero__content">
                    <span className="hero__greeting">¡Hola! 👋 Soy</span>
                    <h1 className="hero__title">Antonio Velázquez Martínez</h1>
                    <h2 className="hero__subtitle">
                        <span className="highlight">Actual estudiante de MAC</span> en Crecimiento
                    </h2>
                    <p className="hero__description">
                        Recién egresado de Tecnologías de la Información apasionado por crear 
                        soluciones digitales innovadoras. Combino creatividad técnica con un 
                        enfoque orientado a resultados para transformar ideas en código funcional.
                    </p>

                    <div className="hero__buttons">
                        <Link href="#projects" className="btn btn--primary">
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </Link>
                        <Link href="#contact" className="btn btn--outline">
                            <i className="fas fa-envelope"></i> Contáctame
                        </Link>
                    </div>
                </div>
                
                <div className="hero__image">
                    <div className="hero__blob">
                        <div className="hero__avatar">
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className="hero__decoration hero__decoration--1"></div>
                    <div className="hero__decoration hero__decoration--2"></div>
                    <div className="hero__decoration hero__decoration--3"></div>
                </div>
            </div>
            
            <div className="hero__scroll">
                <Link href="#interests" className="hero__scroll-link">
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </section>
    );

}