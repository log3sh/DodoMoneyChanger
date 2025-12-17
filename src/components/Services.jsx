export default function Services() {
    const services = [
        {
            icon: 'cash-outline',
            title: 'Currency Exchange',
            features: ['25+ Currencies Available', 'Current Market Rates', 'Same-day Service', 'Zero Hidden Charges']
        },
        {
            icon: 'school-outline',
            title: 'Student & Travel Forex',
            features: ['Forex for Students & Tourists', 'Travel Cards Available', 'Tour Package Currency', 'Competitive Travel Rates']
        },
        {
            icon: 'airplane-outline',
            title: 'Home & Airport Delivery',
            features: ['Secure Transport', 'Flexible Timing', 'Airport Handover', 'No Delivery Charges']
        }
    ];

    return (
        <section className="services section" id="services">
            <h2 className="section-title">Our Services</h2>
            <div className="container services-container grid">
                {services.map((service, index) => (
                    <div className={`services-card reveal stagger-${index + 1}`} key={index}>
                        <div className="services-icon"><ion-icon name={service.icon}></ion-icon></div>
                        <h3 className="services-title">{service.title}</h3>
                        <ul className="services-list">
                            {service.features.map((feature, idx) => (
                                <li key={idx}><ion-icon name="checkmark-circle-outline"></ion-icon> {feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
