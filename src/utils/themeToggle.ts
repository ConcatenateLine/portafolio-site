// Theme toggle functionality
const THEME_KEY = 'theme-preference';

export function getThemePreference(): 'light' | 'dark' {
    if (typeof window !== 'undefined') {
        const storedPreference = localStorage.getItem(THEME_KEY);
        if (storedPreference) {
            return storedPreference as 'light' | 'dark';
        }
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
    }
    return 'light';
}

export function setThemePreference(theme: 'light' | 'dark') {
    if (typeof window !== 'undefined') {
        localStorage.setItem(THEME_KEY, theme);
        document.documentElement.setAttribute('data-theme', theme);
    }
}
