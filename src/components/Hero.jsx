export default function Hero() {
    return (
        <section className="home" id="hero">
            <div className="home-bg"></div>
            <div className="container home-container">
                <div className="home-data">
                    <div className="trust-badges">
                        <span className="trust-badge"><ion-icon name="checkmark-outline"></ion-icon> RBI Licensed</span>
                        <span className="trust-badge"><ion-icon name="checkmark-outline"></ion-icon> Same Day Service</span>
                        <span className="trust-badge"><ion-icon name="checkmark-outline"></ion-icon> Fair & Clear Pricing</span>
                        <span className="trust-badge"><ion-icon name="checkmark-outline"></ion-icon> Home & Airport Delivery</span>
                    </div>
                    <h1 className="home-title">Clear Rates. <br /> Quick Exchange. <br /> <em>Zero Confusion.</em></h1>
                    <p className="home-description">
                        Reliable currency exchange in Trichy since 2015.
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
                    {/* Exchange Rates CTA Card */}
                    <div className="rates-card">
                        <div className="rates-header">
                            <h3 className="rates-title">Current Exchange Rates</h3>
                            <span className="rates-status">
                                <span className="status-dot"></span>
                                Call for latest rates
                            </span>
                        </div>
                        <div className="rates-content">
                            <h4 className="rates-subtitle">Today's Exchange Rates</h4>
                            <p className="rates-text">
                                Our rates change based on market conditions to give you the best value.
                                Call us to know today's rates and book your exchange.
                            </p>
                            <div className="rates-buttons">
                                <a href="tel:+919384444069" className="rates-btn rates-btn-call">
                                    <ion-icon name="call"></ion-icon>
                                    Call Now
                                </a>
                                <a href="https://wa.me/919384444069" target="_blank" className="rates-btn rates-btn-whatsapp">
                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className="rates-footer">
                            <p>Rates updated every day based on market changes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
