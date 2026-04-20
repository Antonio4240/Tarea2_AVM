import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

let HeaderData:String ='Antonio Velázquez Martínez'

export default function Header(){
        return(
             <header className={styles.header} id="header">
        <nav className={`container ${styles.nav}`}>
            <Link href="#home" className="nav__logo">
                <span className="logo__bracket">&lt;</span>{HeaderData}<span className="logo__bracket">/&gt;</span>
            </Link>
            
            <input type="checkbox" id="nav-toggle" className="nav__checkbox"/>
            <label htmlFor="nav-toggle" className="nav__toggle">
                <i className="fas fa-bars"></i>
            </label>
            
            <div className="nav__menu" id="nav-menu">
                <label htmlFor="nav-toggle" className="nav__close">
                    <i className="fas fa-times"></i>
                </label>
                
                <ul className="nav__list">
                    <li className="nav__item">
                        <label htmlFor="nav-toggle">
                            <Link href="#home" className="nav__link">Inicio</Link>
                        </label>
                    </li>
                    <li className="nav__item">
                        <label htmlFor="nav-toggle">
                            <Link href="#interests" className="nav__link">Intereses</Link>
                        </label>
                    </li>
                    <li className="nav__item">
                        <label htmlFor="nav-toggle">
                            <Link href="#cv" className="nav__link">CV</Link>
                        </label>
                    </li>
                    <li className="nav__item">
                        <label htmlFor="nav-toggle">
                            <Link href="#projects" className="nav__link">Proyectos</Link>
                        </label>
                    </li>
                    <li className="nav__item">
                        <label htmlFor="nav-toggle">
                            <Link href="#contact" className="nav__link">Contacto</Link>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
        );
}
