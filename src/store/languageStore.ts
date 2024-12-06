import { translations, type Language } from '../config/translations';

// Create a simple store for language preference
class LanguageStore {
    private static instance: LanguageStore;
    private currentLanguage: Language = 'en';

    private constructor() {
        // Initialize with browser language if available
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('preferredLanguage') as Language;
            
            if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
                this.currentLanguage = savedLang;
            } else {
                const browserLang = navigator.language.split('-')[0];
                this.currentLanguage = browserLang === 'es' ? 'es' : 'en';
            }
        }
    }

    public static getInstance(): LanguageStore {
        if (!LanguageStore.instance) {
            LanguageStore.instance = new LanguageStore();
        }
        return LanguageStore.instance;
    }

    public getCurrentLanguage(): Language {
        return this.currentLanguage;
    }

    public setLanguage(lang: Language): void {
        this.currentLanguage = lang;
        if (typeof window !== 'undefined') {
            localStorage.setItem('preferredLanguage', lang);
            // Dispatch a custom event to notify components
            window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
        }
    }

    public translate(key: string): string {
        const keys = key.split('.');
        let value: any = translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return the key if translation not found
            }
        }
        
        return typeof value === 'string' ? value : key;
    }
}

export const languageStore = LanguageStore.getInstance();
