import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/vacantes') return;

        window.scrollTo(1, 0);
    }, [pathname]);

    return null;
};
