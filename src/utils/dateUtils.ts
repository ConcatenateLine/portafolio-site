export function getCurrentFormattedDate(language: string = "en-US"): string {
    return new Date().toLocaleDateString(language, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}