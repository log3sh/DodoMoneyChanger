export default function Reviews() {
    const reviews = [
        {
            name: "Rajesh Kumar",
            date: "2 months ago",
            rating: 5,
            text: "Excellent service! Best rates in Trichy compared to others. Very professional staff and quick transaction."
        },
        {
            name: "Priya S",
            date: "1 month ago",
            rating: 5,
            text: "Highly recommended for students. Using their forex card for my UK studies, very smooth experience."
        },
        {
            name: "Mohamed R",
            date: "3 weeks ago",
            rating: 5,
            text: "Doorstep delivery was very helpful. Genuine rates and transparent process. Will definitely visit again."
        }
    ];

    return (
        <section className="reviews-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Customer Reviews</h2>
                    <p className="section-subtitle">What people say about us</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-header">
                                <div className="review-avatar">{review.name.charAt(0)}</div>
                                <div className="review-info">
                                    <h4 className="review-name">{review.name}</h4>
                                    <span className="review-date">{review.date}</span>
                                </div>
                                <div className="review-google-icon">
                                    <ion-icon name="logo-google"></ion-icon>
                                </div>
                            </div>
                            <div className="review-stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <ion-icon name="star" key={i}></ion-icon>
                                ))}
                            </div>
                            <p className="review-text">{review.text}</p>
                        </div>
                    ))}
                </div>

                <div className="reviews-footer">
                    <a href="https://www.google.com/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3QK7GvLo2zQqneG3nZnuVq1EHCHEjlbCVzK8PaFwQSDXPEXpKW0EkWptlfA-z37WyHDyZlHSZrpJfqySgUxCgtL2hPRyaRDsa6RX_waSyvXWdeJCg%3D%3D&q=Dodo+Money+Changer+Pvt.+Ltd.+Reviews"
                        target="_blank"
                        className="btn btn-secondary">
                        View all Google Reviews <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                </div>
            </div>
        </section>
    );
}
