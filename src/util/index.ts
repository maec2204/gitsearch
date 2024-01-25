export const dateParser = (date: string): string => {
    const dateObj = new Date(date);
    const dateString = dateObj.toDateString();
    const [weekday, month, day, year] = dateString.split(" ");
    return `${day} ${month} ${year}`;
};