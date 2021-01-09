export type ActionType =
    | { type: 'ADD_TO_RECENT_FROM_LOCALSTORAGE', payload: string[] }
    | { type: 'ADD_TO_FAVORITE_FROM_LOCALSTORAGE', payload: string[] }
    | { type: 'TOGGLE_FAVORITE', payload: string }
    | { type: 'ADD_TO_RECENT', payload: string }
    | { type: 'GET_RECENT' }
    | { type: 'GET_FAVORITE' }
    ;

export interface IState {
    recentSearches: string[];
    favoritePlayers: string[];
}