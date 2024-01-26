export const dateParser = (date: string, locale: string): string => {
    const dateObj = new Date(date);
    if (locale === 'es') {
        return dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    } else {
        return dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    }
};