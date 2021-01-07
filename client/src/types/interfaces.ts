import { PlayerStats } from "./player-stats";
import { RecentMatches } from "./recent-matches";

export type ActiveType = 'kills' | 'damageDone' | 'kdRatio';

export type FetchError = {
    status: string;
    message: string;
}

export type FetchSucces = {
    status: string;
    playerStats: PlayerStats;
    recentMatches: RecentMatches;
}