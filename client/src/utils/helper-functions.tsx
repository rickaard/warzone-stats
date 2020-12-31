export const getFormatedTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const fullDate = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
    const fullTime = `${date.getUTCHours()}:${date.getUTCMinutes()}`;

    return `${fullDate}\n${fullTime}`;
}