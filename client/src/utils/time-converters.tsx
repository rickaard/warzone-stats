// converts seconds to MM:ss
export const secondsToMMss = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
}

export const getFullFormatedTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const fullDate = `${year}-${month}-${day}`;

    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(); // adds 0 before number if less than 10
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const fullTime = `${hour}:${minute}`;

    return `${fullDate} ${fullTime}`;
}

export const getFormatedTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(); // adds 0 before number if less than 10
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const fullTime = `${hour}:${minute}`;

    return fullTime;
}