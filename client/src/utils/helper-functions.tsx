export const getFormatedTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const fullDate = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;

    const hour = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours(); // adds 0 before numbe if less than 10
    const minute = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
    const fullTime = `${hour}:${minute}`;

    // return `${fullDate}\n${fullTime}`;
    return fullTime;
}