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
            // if the name is allready in recent searches -> just return the state and do nothing else
            const isInRecent = state.recentSearches.includes(action.payload);
            if (isInRecent) {
                return state;
            }

            const updatedRecentList = [...state.recentSearches];
            // if recent searches list allready contains 5 names -> remove the last in the list
            if (updatedRecentList.length >= 5) {
                updatedRecentList.pop();
            }
            // add the most recent search to the start of list
            updatedRecentList.unshift(action.payload);
            return {
                ...state,
                recentSearches: updatedRecentList
            }


        case 'TOGGLE_FAVORITE':
            const isInFavorites = state.favoritePlayers.includes(action.payload);

            let updatedFavoritList;
            if (isInFavorites) {
                updatedFavoritList = state.favoritePlayers.filter(name => name !== action.payload);
            } else {
                updatedFavoritList = [...state.favoritePlayers, action.payload];
            }

            return {
                ...state,
                favoritePlayers: updatedFavoritList
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