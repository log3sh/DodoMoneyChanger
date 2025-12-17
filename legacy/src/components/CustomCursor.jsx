const { useEffect } = React;

function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursor2 = document.querySelector('.cursor2');

        const handleMouseMove = (e) => {
            if (cursor && cursor2) {
                cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
                cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

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

window.CustomCursor = CustomCursor;
