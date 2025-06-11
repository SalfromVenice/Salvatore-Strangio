import { useEffect, useState } from "react";

export function useIsThemeDark() {
    const [isDark, setIsDark] = useState(() => {
        return document.documentElement.classList.contains("dark");
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return isDark;
}
