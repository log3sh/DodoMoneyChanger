import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.5, // Much slower, "heavier" feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8, // Reduced for finer control
            smoothTouch: false,
            touchMultiplier: 2,
            wheelMultiplier: 0.8, // Added for smoother wheel interaction
        });

        // Expose lenis globally for other components to use
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links via event delegation (more robust)
        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                const id = anchor.getAttribute('href');
                if (id === '#') return; // Ignore empty anchors

                const target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    lenis.scrollTo(target);
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
            delete window.lenis;
        };
    }, []);

    return null;
}
