function Hero() {
    return (
        <section className="home" id="hero">
            <div className="home-bg"></div>
            <div className="container home-container">
                <div className="home-data">
                    <span className="home-subtitle">RBI Licensed Money Changer</span>
                    <h1 className="home-title">
                        Clear Rates. <br /> Quick Exchange. <br /> <em>Zero Confusion.</em>
                    </h1>
                    <p className="home-description">
                        Reliable currency exchange in Trichy since 2015.
                        We offer competitive rates or hassle-free student forex with home & airport delivery.
                    </p>
                    <div className="home-btns">
                        <a href="#contact" className="btn btn-primary">
                            Get Quote <ion-icon name="arrow-forward-outline"></ion-icon>
                        </a>
                        <a href="https://wa.me/919384444069" target="_blank" className="btn btn-secondary">
                            <ion-icon name="logo-whatsapp"></ion-icon> WhatsApp Us
                        </a>
                    </div>
                </div>

                <div className="home-img-container">
                    <div className="hero-shape"></div>
                    <img src="src/seal.jpg" className="hero-seal" alt="Dodo Money Changer Official Seal" />
                </div>
            </div>
        </section>
    );
}

window.Hero = Hero;
