import * as React from 'react';


interface IState {
    recentSearches: string[];
    favoritePlayers: string[];
}

type ActionType =
    | { type: 'ADD_TO_RECENT', payload: string[] }
    | { type: 'ADD_TO_FAVORITE', payload: string[] }
    | { type: 'GET_RECENT' }
    | { type: 'GET_FAVORITE' }
    ;



// const recentSearchesFromLocalStorage = localStorage.getItem('recent-name') || [];
// const favoriteSearchesFromLocalStorage = localStorage.getItem('favorite-names') || [];

const initialSearchState: IState = {
    recentSearches: [],
    favoritePlayers: []
}


const searchReducer = (state: IState, action: ActionType) => {
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



const useSearches = () => {
    const [state, dispatch] = React.useReducer(searchReducer, initialSearchState);

    React.useEffect(() => {
        const recentList = localStorage.getItem('recent-names');
        const favoriteList = localStorage.getItem('favorite-names');
        if (recentList) {
            const parsedRecentList = JSON.parse(recentList);
            dispatch({ type: 'ADD_TO_RECENT', payload: parsedRecentList })
        }
        if (favoriteList) {
            const parsedFavoriteList = JSON.parse(favoriteList);
            dispatch({ type: 'ADD_TO_FAVORITE', payload: parsedFavoriteList })
        }
    }, []);


    React.useEffect(() => {
        console.log('LocalStorage - Favorite: ', state.favoritePlayers);
        console.log('LocalStorage - Recent: ', state.recentSearches);
    }, [state.favoritePlayers, state.recentSearches]);



    // ADD TO LOCALSTORAGE WHENEVER state.recentSearches changes
    React.useEffect(() => {
        localStorage.setItem('recent-names', JSON.stringify(state.recentSearches));
    }, [state.recentSearches])

    // ADD TO LOCALSTORAGE WHENEVER state.favoritePlayers changes
    React.useEffect(() => {
        localStorage.setItem('favorite-names', JSON.stringify(state.favoritePlayers))
    }, [state.favoritePlayers])



    return {
        state
    };
}

export default useSearches;