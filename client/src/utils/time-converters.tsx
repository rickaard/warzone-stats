// converts seconds to MM:ss
export const secondsToMMss = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
}

export const getFullFormatedTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const month = (date.getUTCMonth() + 1) < 10 ? '0' + (date.getUTCMonth() + 1) : (date.getUTCMonth() + 1);
    const day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
    const fullDate = `${date.getUTCFullYear()}-${month}-${day}`;

    const hour = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours(); // adds 0 before number if less than 10
    const minute = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
    const fullTime = `${hour}:${minute}`;

    return `${fullDate} ${fullTime}`;
}

export const getFormatedTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const hour = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours(); // adds 0 before number if less than 10
    const minute = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
    const fullTime = `${hour}:${minute}`;

    return fullTime;
}