import { useEffect, useState } from 'react';

export function useMobile() {
    const [isMobile, setIsMobile] = useState<boolean>(() =>
        typeof window === 'undefined' ? false : window.matchMedia('(max-width: 639px)').matches,
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 639px)').matches);
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
}
