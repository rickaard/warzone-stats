export const getFormatedTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    const hour = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours(); // adds 0 before number if less than 10
    const minute = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
    const fullTime = `${hour}:${minute}`;

    return fullTime;
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


export const roundToTwo = (num: number) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

// appends prefix after number, e.g 1th, 12th 
export const addOrdinalNumberSuffix = (num: number) => {

    if (![11, 12, 13].includes(num % 100)) {

        switch (num % 10) {
            case 1: 
                return 'st';
            case 2: 
                return 'nd';
            case 3:
                return 'rd';
            default:
                break;
        };
    };

    return 'th';
};

// converts seconds to MM:ss
export const secondsToMMss = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
}

export const brMode = (mode: string) => {
    if (mode === 'br_brquads') return 'BR Quads';
    if (mode === 'br_brduos') return 'BR Duos';
    if (mode === 'br_brtriostim_name2') return 'BR Trios Stimulus';
    if (mode === 'br_brtrios') return 'BR Trios';
    if (mode === 'br_brsolo') return 'BR Solo';
    if (mode === 'br_mini_miniroyale') return 'Mini Royale';

    return 'Unknown mode';
};