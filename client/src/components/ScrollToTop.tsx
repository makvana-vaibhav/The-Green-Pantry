import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
    const [pathname] = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        setTimeout(() => window.scrollTo(0, 0), 0);
    }, [pathname]);

    return null;
}
