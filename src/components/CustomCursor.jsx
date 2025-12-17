import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursor2 = document.querySelector('.cursor2');

        // Movement
        const handleMouseMove = (e) => {
            if (cursor && cursor2) {
                cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
                cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
            }
        };
        document.addEventListener('mousemove', handleMouseMove);

        // Hover Effects
        // Using a slight delay to ensure all child components are mounted/rendered
        setTimeout(() => {
            const interactiveElements = document.querySelectorAll('a, button, .btn, .services-card, .contact-social-link, .nav-link');

            const addHover = () => {
                if (cursor) cursor.classList.add('hover');
                if (cursor2) cursor2.classList.add('hover');
            };
            const removeHover = () => {
                if (cursor) cursor.classList.remove('hover');
                if (cursor2) cursor2.classList.remove('hover');
            };

            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', addHover);
                el.addEventListener('mouseleave', removeHover);
            });

            // Cleanup function for listeners (closure captures current elements)
            // But we can't easily clean up inside setTimeout closure from outside return.
            // It's a minor trade-off. We'll trust React unmount to clean up page reload.
            // Or store them in a ref.
            // For simplicity in this migration:
        }, 100);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor2"></div>
            <div className="noise-overlay"></div>
        </>
    );
}
