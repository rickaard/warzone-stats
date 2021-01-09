import { ActionType, IState } from './types';


export const searchReducer = (state: IState, action: ActionType) => {
    switch (action.type) {
        case 'ADD_TO_RECENT_FROM_LOCALSTORAGE':
            return {
                ...state,
                recentSearches: action.payload
            }

        case 'ADD_TO_FAVORITE_FROM_LOCALSTORAGE':
            return {
                ...state,
                favoritePlayers: action.payload
            }

        case 'ADD_TO_RECENT':
            return {
                ...state,
                recentSearches: [...state.recentSearches, action.payload]
            }

        case 'TOGGLE_FAVORITE':
            const isInFavorites = state.favoritePlayers.includes(action.payload);
            if (isInFavorites) {
                return {
                    ...state,
                    favoritePlayers: state.favoritePlayers.filter(name => name !== action.payload)
                }
            }
            return {
                ...state,
                favoritePlayers: [...state.recentSearches, action.payload]
            }

        case 'GET_RECENT':
            return {
                ...state,
            }

        case 'GET_FAVORITE':
            return {
                ...state,
            }

        default:
            throw Error('No Action type provided');
    }

}