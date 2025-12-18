import { useState } from 'react';
import logo from '../assets/logo-with-flag.png';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setShowMenu(false);
        if (window.lenis) {
            window.lenis.scrollTo(id);
        } else {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };



    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo" onClick={(e) => handleNavClick(e, '#header')}>
                    <img src={logo} alt="Dodo Money Changer Logo" className="logo-img" />
                    Dodo Money Changer
                </a>

                <div className={`nav ${showMenu ? 'show-menu' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#hero" className="nav-link active" onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#stats" className="nav-link" onClick={(e) => handleNavClick(e, '#stats')}>Stats</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                        </li>
                        {/* Mobile CTA Button */}
                        <li className="nav-item mobile-cta">
                            <a href="#contact-details" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact-details')}>Get Rates</a>
                        </li>
                    </ul>
                    {/* Close button for mobile menu */}
                    <div className="nav-close" onClick={() => setShowMenu(false)}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>

                <div className="header-actions">
                    <a href="#contact-details" className="btn btn-primary btn-sm desktop-only">Get Rates</a>
                    {/* Hamburger button */}
                    <div className="nav-toggle" onClick={() => setShowMenu(true)}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </header>
    );
}
