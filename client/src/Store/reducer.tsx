import { ActionType, IState } from './types';


export const searchReducer = (state: IState, action: ActionType) => {
    switch (action.type) {
        case 'ADD_TO_RECENT':
            return {
                ...state,
                recentSearches: action.payload
            }

        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favoritePlayers: action.payload
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
            return state;
    }

}