const { LoadingScreen, CustomCursor, Header, Hero, Stats, Services, Contact, Footer } = window;

function App() {
    return (
        <div className="dark-theme">
            <LoadingScreen />
            <CustomCursor />
            <Header />
            <main className="main">
                <Hero />
                <Stats />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
