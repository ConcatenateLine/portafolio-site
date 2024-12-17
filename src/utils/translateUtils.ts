import { languageStore } from '../store/languageStore';
import { getCurrentFormattedDate } from "../utils/dateUtils";

// Function to translate text
export const t = (key: string) => {
    return languageStore.translate(key);
};

// Function to update translations in the DOM
export function updateTranslations() {
    const translatableElements = document.querySelectorAll('[data-translate]');

    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (key) {
            const translation = languageStore.translate(key);
            if (typeof translation === 'string') {
                element.textContent = translation;
            }
        }
    });

    const currentDate = getCurrentFormattedDate(languageStore.getCurrentLanguage());


    const dateElement = document.querySelector(".newspaper-date-current");
    if (dateElement) {
        dateElement.textContent = currentDate;
    }

}

// Initialize translations
export function initializeTranslations() {

    // Initial update if needed
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateTranslations);
    } else {
        updateTranslations();
    }

    // Listen for language changes
    window.addEventListener('languageChange', updateTranslations);

    // Cleanup listener when component is destroyed
    document.addEventListener('astro:unmount', () => {
        window.removeEventListener('languageChange', updateTranslations);
        document.removeEventListener('DOMContentLoaded', updateTranslations);
    });
}
