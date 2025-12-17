import { useState } from 'react';
import logo from '../assets/logo.jpg';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src={logo} alt="Dodo Money Changer Logo" className="logo-img" />
                    Dodo Money Changer
                </a>

                <div className={`nav ${showMenu ? 'show-menu' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#hero" className="nav-link active" onClick={() => setShowMenu(false)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link" onClick={() => setShowMenu(false)}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#stats" className="nav-link" onClick={() => setShowMenu(false)}>Stats</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={() => setShowMenu(false)}>Contact</a>
                        </li>
                        {/* Mobile CTA Button */}
                        <li className="nav-item mobile-cta">
                            <a href="#contact-details" className="btn btn-primary" onClick={() => setShowMenu(false)}>Get Rates</a>
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
