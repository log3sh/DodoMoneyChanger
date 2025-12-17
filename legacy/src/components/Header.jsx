function Header() {
    return (
        <header className="header" id="header">
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src="src/logo.jpg" alt="Dodo Money Changer Logo" className="logo-img" />
                    Dodo Money Changer
                </a>

                <nav className="nav" id="nav-menu">
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

window.Header = Header;
