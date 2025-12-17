const { useState, useEffect } = React;

function LoadingScreen() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`} id="loading-screen">
            <h1 className="loading-title">Dodo Money Changer</h1>
            <p className="loading-subtitle">Currency Exchange &bull; Trichy</p>
            <div className="loading-spinner">
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
            </div>
        </div>
    );
}

window.LoadingScreen = LoadingScreen;
