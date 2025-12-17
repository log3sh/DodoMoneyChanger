export default function Contact() {
    const contactInfo = [
        { icon: 'location-outline', label: 'Address', data: 'No 14, Ground Floor, Nawab Walaja Complex, N.S.B Road, Singarathope, Trichy 620002' },
        { icon: 'call-outline', label: 'Phone', data: '+91 93844 44069' },
        { icon: 'mail-outline', label: 'Email', data: 'dodomoneychanger@gmail.com' },
        { icon: 'time-outline', label: 'Business Hours', data: 'Mon - Sun: 9:00 AM to 9:30 PM' }
    ];

    const socialLinks = [
        { icon: 'logo-instagram', url: 'https://www.instagram.com/dodomoneychanger/' },
        { icon: 'logo-linkedin', url: 'https://in.linkedin.com/company/dodomoneychanger' },
        { icon: 'logo-whatsapp', url: 'https://wa.me/919384444069' }
    ];

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact Us</h2>
            <div className="container contact-container grid">
                <div className="contact-info">
                    <h3 className="contact-subtitle">Get in Touch</h3>
                    <p className="contact-description">To confirm your rates or enquire, you can book via call.</p>
                    <div className="contact-content">
                        <div className="contact-item">
                            <div className="contact-icon"><ion-icon name="location-outline"></ion-icon></div>
                            <div>
                                <h4 className="contact-label">Address</h4>
                                <a href="https://www.google.com/maps/dir//No+14,+Ground+floor,+Nawab+Walajah+Shopping+Mall,+NSB+Rd,+behind+Rathna+Stores,+Singarathope,+Tharanallur,+Tiruchirappalli,+Tamil+Nadu+620002/@10.4595456,79.2199168,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3baaf568e520086b:0xf2da61cc28adbf0b!2m2!1d78.6948533!2d10.8259714?entry=ttu" target="_blank" rel="noopener noreferrer" className="contact-data">
                                    No 14, Ground Floor, Nawab Walaja Complex, N.S.B Road, Singarathope, Trichy 620002
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><ion-icon name="call-outline"></ion-icon></div>
                            <div>
                                <h4 className="contact-label">Phone</h4>
                                <a href="tel:+919384444069" className="contact-data">+91 93844 44069</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><ion-icon name="mail-outline"></ion-icon></div>
                            <div>
                                <h4 className="contact-label">Email</h4>
                                <a href="mailto:dodomoneychanger@gmail.com" className="contact-data">dodomoneychanger@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><ion-icon name="time-outline"></ion-icon></div>
                            <div>
                                <h4 className="contact-label">Business Hours</h4>
                                <p className="contact-data">Mon - Sun: 9:00 AM to 9:30 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-social">
                        {socialLinks.map((link, index) => (
                            <a href={link.url} target="_blank" className="contact-social-link" key={index}>
                                <ion-icon name={link.icon}></ion-icon>
                            </a>
                        ))}
                    </div>
                    <a href="https://www.google.com/maps/dir//No+14,+Ground+floor,+Nawab+Walajah+Shopping+Mall,+NSB+Rd,+behind+Rathna+Stores,+Singarathope,+Tharanallur,+Tiruchirappalli,+Tamil+Nadu+620002/@10.4595456,79.2199168,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3baaf568e520086b:0xf2da61cc28adbf0b!2m2!1d78.6948533!2d10.8259714?entry=ttu"
                        target="_blank"
                        className="btn btn-primary"
                        style={{ marginTop: '2rem' }}>
                        <ion-icon name="navigate-outline"></ion-icon> Get Directions
                    </a>
                </div>
                <div className="contact-map">
                    <iframe src="https://maps.google.com/maps?q=Dodo+Money+Changer+Pvt.+Ltd.+Trichy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" height="450" style={{ border: 0, borderRadius: '1rem' }} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </section>
    );
}
