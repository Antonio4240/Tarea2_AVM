import React from "react";
import styles from "./Cv.module.css";
import Link from "next/link";

export default function Cv(){
return(
    <section className={styles.cv}id="cv">
            <div className={`container ${styles.nav}`}>
                <div className="cv__content">
                    <div className="cv__info">
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>
                        <p className="cv__description">
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className="cv__buttons">
                            <a href="https://www.overleaf.com/gallery/tagged/cv" className="btn btn--primary btn--large">
                                <i className="fas fa-download"></i> Descargar CV
                            </a>
                            <a href="https://antonio4240.github.io/CVAntonioVelazMtz/" className="btn btn--primary btn--large">
                                <i className="fas fa-eye"></i> Ver CV Digital
                            </a>
                        </div>
                    </div>
                    
                    <div className="cv__social">
                        <h3 className="cv__social-title">Conectemos</h3>
                        <div className="cv__social-links">
                            <a href="https://www.linkedin.com/in/antonio-vel%C3%A1zquez-6573893b0/" target="_blank" rel="noopener noreferrer" className="social__card">
                                <div className="social__icon social__icon--linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="social__info">
                                    <span className="social__name">LinkedIn</span>
                                    <span className="social__user">@tu-perfil</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                            
                            <a href="https://github.com/Antonio4240" target="_blank" rel="noopener noreferrer" className="social__card">
                                <div className="social__icon social__icon--github">
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className="social__info">
                                    <span className="social__name">GitHub</span>
                                    <span className="social__user">@tu-usuario</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                            
                            <a href="mailto:tu@email.com" className="social__card">
                                <div className="social__icon social__icon--email">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="social__info">
                                    <span className="social__name">Email</span>
                                    <span className="social__user">tu@email.com</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
}