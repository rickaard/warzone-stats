export interface All {
    kills: number;
    objectiveTeamWiped: number;
    objectiveLastStandKill: number;
    wallBangs: number;
    avgLifeTime: number;
    score: number;
    headshots: number;
    assists: number;
    killsPerGame: number;
    objectiveDestroyedVehicleMedium: number;
    scorePerMinute: number;
    distanceTraveled: number;
    deaths: number;
    objectiveMunitionsBoxTeammateUsed: number;
    objectiveBrDownEnemyCircle3: number;
    objectiveDestroyedVehicleHeavy: number;
    objectiveBrDownEnemyCircle2: number;
    kdRatio: number;
    objectiveBrDownEnemyCircle1: number;
    objectiveBrMissionPickupTablet: number;
    objectiveReviver: number;
    objectiveBrKioskBuy: number;
    gulagDeaths: number;
    objectiveBrDownEnemyCircle6: number;
    objectiveBrDownEnemyCircle5: number;
    timePlayed: number;
    headshotPercentage: number;
    executions: number;
    matchesPlayed: number;
    gulagKills: number;
    nearmisses: number;
    objectiveBrCacheOpen: number;
    damageDone: number;
    damageTaken: number;
}

export interface BrBrtrios {
    kills: number;
    objectiveTeamWiped: number;
    objectiveLastStandKill: number;
    wallBangs: number;
    avgLifeTime: number;
    score: number;
    headshots: number;
    assists: number;
    killsPerGame: number;
    scorePerMinute: number;
    distanceTraveled: number;
    deaths: number;
    objectiveBrDownEnemyCircle2: number;
    kdRatio: number;
    objectiveBrDownEnemyCircle1: number;
    objectiveBrMissionPickupTablet: number;
    objectiveReviver: number;
    scorePerGame: number;
    objectiveBrKioskBuy: number;
    gulagDeaths: number;
    timePlayed: number;
    headshotPercentage: number;
    executions: number;
    matchesPlayed: number;
    gulagKills: number;
    nearmisses: number;
    objectiveBrCacheOpen: number;
    damageDone: number;
    damageTaken: number;
}

export interface BrBrduos {
    kills: number;
    objectiveTeamWiped: number;
    objectiveLastStandKill: number;
    wallBangs: number;
    avgLifeTime: number;
    score: number;
    headshots: number;
    assists: number;
    killsPerGame: number;
    objectiveDestroyedVehicleMedium: number;
    scorePerMinute: number;
    distanceTraveled: number;
    deaths: number;
    objectiveMunitionsBoxTeammateUsed: number;
    objectiveBrDownEnemyCircle3: number;
    objectiveDestroyedVehicleHeavy: number;
    objectiveBrDownEnemyCircle2: number;
    kdRatio: number;
    objectiveBrDownEnemyCircle1: number;
    objectiveBrMissionPickupTablet: number;
    objectiveReviver: number;
    scorePerGame: number;
    objectiveBrKioskBuy: number;
    gulagDeaths: number;
    objectiveBrDownEnemyCircle6: number;
    objectiveBrDownEnemyCircle5: number;
    timePlayed: number;
    headshotPercentage: number;
    executions: number;
    matchesPlayed: number;
    gulagKills: number;
    nearmisses: number;
    objectiveBrCacheOpen: number;
    damageDone: number;
    damageTaken: number;
}

export interface BrBrquads {
    kills: number;
    objectiveTeamWiped: number;
    objectiveLastStandKill: number;
    wallBangs: number;
    avgLifeTime: number;
    score: number;
    headshots: number;
    assists: number;
    killsPerGame: number;
    scorePerMinute: number;
    distanceTraveled: number;
    deaths: number;
    kdRatio: number;
    objectiveBrDownEnemyCircle1: number;
    objectiveBrMissionPickupTablet: number;
    objectiveReviver: number;
    scorePerGame: number;
    objectiveBrKioskBuy: number;
    gulagDeaths: number;
    timePlayed: number;
    headshotPercentage: number;
    executions: number;
    matchesPlayed: number;
    gulagKills: number;
    nearmisses: number;
    objectiveBrCacheOpen: number;
    damageDone: number;
    damageTaken: number;
}

export interface Summary {
    all: All;
    br_brtrios: BrBrtrios;
    br_brduos: BrBrduos;
    br_brquads: BrBrquads;
}

export interface PlayerStats {
    kills: number;
    medalXp: number;
    objectiveTeamWiped?: number;
    objectiveLastStandKill?: number;
    matchXp: number;
    scoreXp: number;
    wallBangs: number;
    score: number;
    totalXp: number;
    headshots: number;
    assists: number;
    challengeXp?: any;
    rank: number;
    scorePerMinute: number;
    distanceTraveled: number;
    teamSurvivalTime: number;
    deaths: number;
    objectiveMunitionsBoxTeammateUsed?: any;
    kdRatio: number;
    objectiveBrDownEnemyCircle1?: any;
    objectiveBrMissionPickupTablet?: any;
    bonusXp?: any;
    objectiveBrKioskBuy?: any;
    gulagDeaths: number;
    timePlayed: number;
    executions: number;
    gulagKills: number;
    nearmisses: number;
    objectiveBrCacheOpen?: any;
    percentTimeMoving: number;
    miscXp?: any;
    longestStreak: number;
    teamPlacement: number;
    damageDone: number;
    damageTaken: number;
    objectiveDestroyedVehicleHeavy?: any;
    objectiveBrDownEnemyCircle3?: any;
    objectiveBrDownEnemyCircle2?: any;
    objectiveBrDownEnemyCircle6?: any;
    objectiveReviver?: any;
    objectiveBrDownEnemyCircle5?: any;
    objectiveDestroyedVehicleMedium?: any;
}

export interface Awards {
}

export interface Domination {
    weaponXp: number;
    xp: number;
    count: number;
}

export interface Scavenger {
    weaponXp: number;
    xp: number;
    count: number;
}

export interface Timedrun {
    weaponXp: number;
    xp: number;
    count: number;
}

export interface MissionStatsByType {
    domination: Domination;
    scavenger: Scavenger;
    timedrun: Timedrun;
}

export interface BrMissionStats {
    missionsComplete: number;
    totalMissionXpEarned: number;
    totalMissionWeaponXpEarned: number;
    missionStatsByType: MissionStatsByType;
}

export interface Attachment {
    name: string;
    label?: any;
    image?: any;
    category?: any;
}

export interface PrimaryWeapon {
    name: string;
    label?: any;
    imageLoot?: any;
    imageIcon?: any;
    variant: string;
    attachments: Attachment[];
}

export interface Attachment2 {
    name: string;
    label?: any;
    image?: any;
    category?: any;
}

export interface SecondaryWeapon {
    name: string;
    label?: any;
    imageLoot?: any;
    imageIcon?: any;
    variant: string;
    attachments: Attachment2[];
}

export interface Perk {
    name: string;
    label?: any;
    image?: any;
    imageMainUi?: any;
    imageProgression?: any;
}

export interface ExtraPerk {
    name: string;
    label?: any;
    image?: any;
    imageMainUi?: any;
    imageProgression?: any;
}

export interface Killstreak {
    name: string;
    label?: any;
}

export interface Tactical {
    name: string;
    label?: any;
    image?: any;
    imageLarge?: any;
    progressionImage?: any;
}

export interface Lethal {
    name: string;
    label?: any;
    image?: any;
    imageLarge?: any;
    progressionImage?: any;
}

export interface Loadout {
    primaryWeapon: PrimaryWeapon;
    secondaryWeapon: SecondaryWeapon;
    perks: Perk[];
    extraPerks: ExtraPerk[];
    killstreaks: Killstreak[];
    tactical: Tactical;
    lethal: Lethal;
}

export interface Player {
    team: string;
    rank: number;
    awards?: any;
    username: string;
    uno?: any;
    clantag?: string;
    brMissionStats?: any;
    loadout?: any;
}

export interface Match {
    utcStartSeconds: number;
    utcEndSeconds: number;
    map: string;
    mode: string;
    matchID?: string;
    duration: number;
    playlistName?: any;
    version: number;
    gameType: string;
    playerCount: number;
    playerStats: PlayerStats;
    player: Player;
    teamCount: number;
    rankedTeams?: any;
    draw?: boolean;
    privateMatch?: boolean;
}

export interface RecentMatchesData {
    summary: Summary;
    matches: Match[];
}

export interface RecentMatches {
    status: string;
    data: RecentMatchesData;
}





