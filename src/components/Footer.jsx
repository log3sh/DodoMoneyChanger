import logo from '../assets/logo-complete.png';

export default function Footer() {
    const quickLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { icon: 'logo-instagram', url: 'https://www.instagram.com/dodomoneychanger/', label: 'Instagram' },
        { icon: 'logo-linkedin', url: 'https://in.linkedin.com/company/dodomoneychanger', label: 'LinkedIn' },
        { icon: 'logo-whatsapp', url: 'https://wa.me/919384444069', label: 'WhatsApp' }
    ];

    return (
        <footer className="footer">
            {/* Decorative top line */}
            <div className="footer-line"></div>

            <div className="container footer-container">
                {/* Brand Column */}
                <div className="footer-brand">
                    <a href="#" className="footer-logo">
                        <img src={logo} alt="Dodo Money Changer" className="footer-logo-img" />
                    </a>
                    <p className="footer-tagline">
                        Trusted currency exchange<br />services since 2015.
                    </p>
                    <div className="footer-social">
                        {socialLinks.map((link, index) => (
                            <a href={link.url} target="_blank" className="footer-social-link" key={index} title={link.label}>
                                <ion-icon name={link.icon}></ion-icon>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-nav">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="footer-nav-link">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h4 className="footer-heading">Contact</h4>
                    <div className="footer-contact-item">
                        <ion-icon name="location-outline"></ion-icon>
                        <span>Trichy, Tamil Nadu</span>
                    </div>
                    <div className="footer-contact-item">
                        <ion-icon name="call-outline"></ion-icon>
                        <span>+91 93844 44069</span>
                    </div>
                    <div className="footer-contact-item">
                        <ion-icon name="time-outline"></ion-icon>
                        <span>9 AM - 9:30 PM</span>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p className="footer-copyright">© 2026 Dodo Money Changer Pvt. Ltd.</p>
                    <p className="footer-rbi"><ion-icon name="shield-checkmark"></ion-icon> RBI Licensed Money Changer</p>
                </div>
            </div>
        </footer >
    );
}
