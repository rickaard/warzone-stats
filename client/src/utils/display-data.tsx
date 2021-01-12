export const brMode = (mode: string) => {
    if (mode === 'br_brquads') return 'BR Quads';
    if (mode === 'br_brduos') return 'BR Duos';
    if (mode === 'br_brtriostim_name2') return 'BR Trios Stimulus';
    if (mode === 'br_brtrios') return 'BR Trios';
    if (mode === 'br_brsolo') return 'BR Solo';
    if (mode === 'br_mini_miniroyale') return 'Mini Royale';
    if (mode === 'br_dmz_plunquad') return 'Plunder Quads';
    if (mode === 'br_dmz_plnbld') return 'Blood Money';
    if (mode === 'br_rebirth_rbrthtrios') return 'Resurgence Trios';

    return 'Unknown mode';
};

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

export const roundToTwo = (num: number) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}