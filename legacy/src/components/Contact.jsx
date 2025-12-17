function Contact() {
    const contactInfo = [
        {
            icon: 'location-outline',
            label: 'Address',
            data: 'No 14, Ground Floor, Nawab Walaja Complex, N.S.B Road, Singarathope, Trichy 620002'
        },
        {
            icon: 'call-outline',
            label: 'Phone',
            data: '+91 93844 44069'
        },
        {
            icon: 'mail-outline',
            label: 'Email',
            data: 'dodomoneychanger@gmail.com'
        },
        {
            icon: 'time-outline',
            label: 'Business Hours',
            data: 'Mon - Sun: 9:00 AM to 9:30 PM'
        }
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
                        {contactInfo.map((item, index) => (
                            <div className="contact-item" key={index}>
                                <div className="contact-icon">
                                    <ion-icon name={item.icon}></ion-icon>
                                </div>
                                <div>
                                    <h4 className="contact-label">{item.label}</h4>
                                    <p className="contact-data">{item.data}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-social">
                        {socialLinks.map((link, index) => (
                            <a href={link.url} target="_blank" className="contact-social-link" key={index}>
                                <ion-icon name={link.icon}></ion-icon>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="contact-map">
                    <iframe
                        src="https://maps.google.com/maps?q=Dodo+Money+Changer+Pvt.+Ltd.+Trichy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" height="450" style={{ border: 0, borderRadius: '1rem' }} allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
        </section>
    );
}

window.Contact = Contact;
