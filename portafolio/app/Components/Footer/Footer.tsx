import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
let FooterData:String = 'Antonio Velázquez Martínez'

export default function Footer(){
return(
    <footer className={styles.footer} id="footer">
        <div className={`container ${styles.nav}`}>
            <div className="footer__content">
                <div className="footer__brand">
                    <Link href="#" className="footer__logo">
                        <span className="logo__bracket">&lt;</span>{FooterData}<span className="logo__bracket">/&gt;</span>
                    </Link>
                    <p className="footer__text">
                        Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
                    </p>
                </div>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/antonio-vel%C3%A1zquez-6573893b0/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Antonio4240" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:tu@email.com" className="footer__social-link" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            
            <div className="footer__bottom">
                <p className="footer__copyright">
                    &copy; 2026 Tu Nombre. Todos los derechos reservados.
                </p>
                <p className="footer__made">
                    Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"></i>
                </p>
            </div>
        </div>
    </footer>

    );
}