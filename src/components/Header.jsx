import logo from '../assets/logo.jpg';

export default function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src={logo} alt="Dodo Money Changer Logo" className="logo-img" />
                    Dodo Money Changer
                </a>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#hero" className="nav-link active">Home</a></li>
                        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#stats" className="nav-link">Stats</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <a href="#contact" className="btn btn-primary btn-sm">Get Rates</a>
                </div>
            </div>
        </header>
    );
}
