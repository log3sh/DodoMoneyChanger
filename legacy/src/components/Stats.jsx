function Stats() {
    const stats = [
        { icon: 'people-outline', number: '100,000+', title: 'Happy Customers' },
        { icon: 'globe-outline', number: '25+', title: 'Currencies Available' },
        { icon: 'calendar-outline', number: '9+', title: 'Years Experience' },
        { icon: 'time-outline', number: '7 Days', title: 'Open Per Week' }
    ];

    return (
        <section className="stats section" id="stats">
            <div className="container stats-container grid">
                {stats.map((stat, index) => (
                    <div className="stats-item" key={index}>
                        <div className="stats-icon">
                            <ion-icon name={stat.icon}></ion-icon>
                        </div>
                        <h3 className="stats-number">{stat.number}</h3>
                        <p className="stats-title">{stat.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

window.Stats = Stats;
