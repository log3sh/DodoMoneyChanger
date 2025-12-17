import { useState, useEffect } from 'react';

export default function LoadingScreen({ fadeOut }) {
    // Progress logic removed as it's not visualized in the new design
    // Only keeping the fade out timer logic if needed, but FadeOut is passed as prop?
    // In App.jsx, setFadeOut is controlled by parent.
    // But LoadingScreen also had its own useEffect for "progress" which drove the timing? 
    // No, App.jsx drives setFadeOut.
    // Wait, Step 450 Line 68: setTimeout(() => setFadeOut(true), 2800);
    // But setFadeOut inside LoadingScreen is a local state [fadeOut, setFadeOut].
    // BUT App also passes fadeOut? <LoadingScreen fadeOut={fadeOut} />
    // In Line 52: const [fadeOut, setFadeOut] = useState(false);
    // Line 76: className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}
    // So LoadingScreen uses LOCAL state in Step 450 definition.
    // BUT App passes `fadeOut` prop in Line 559.
    // Conflict? If component accepts prop `fadeOut`, but defines local state `fadeOut`?
    // In Step 450: function LoadingScreen() { ... } NO PROPS.
    // Line 559 calls <LoadingScreen fadeOut={fadeOut} />.
    // So the PROP was ignored in the old code!
    // And App's fadeOut state was unused by LoadingScreen!
    // The LoadingScreen managed its own fadeOut.
    // CLEANUP: I should use the PROP from App to control it, or keep it self-contained.
    // App sets loading=false after fadeOut.
    // Using App's control is better for sync.
    // I will refactor to use the prop 'fadeOut' from parent.

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <h1 className="loading-brand-title">Dodo Money Changer</h1>
                <p className="loading-tagline">RBI Licensed | Best Rate | Zero Commission</p>
                <div className="loading-spinner"></div>
            </div>
        </div>
    );
}
