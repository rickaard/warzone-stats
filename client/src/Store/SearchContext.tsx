import * as React from 'react';

import { searchReducer } from './reducer';
import { IState, ActionType } from './types';


type ContextProps = {
    recentSearches: string[];
    favoritePlayers: string[];
    dispatch: React.Dispatch<ActionType>;
}


const initialSearchState: IState = {
    recentSearches: [],
    favoritePlayers: []
}

export const SearchContext = React.createContext<ContextProps>({
    ...initialSearchState,
    dispatch: () => {}
});


export const SearchProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(searchReducer, initialSearchState);

    React.useEffect(() => {
        const recentList = localStorage.getItem('recent-names');
        const favoriteList = localStorage.getItem('favorite-names');
        if (recentList) {
            const parsedRecentList = JSON.parse(recentList);
            dispatch({ type: 'ADD_TO_RECENT_FROM_LOCALSTORAGE', payload: parsedRecentList })
        }
        if (favoriteList) {
            const parsedFavoriteList = JSON.parse(favoriteList);
            dispatch({ type: 'ADD_TO_FAVORITE_FROM_LOCALSTORAGE', payload: parsedFavoriteList })
        }
    }, []);




    // ADD TO LOCALSTORAGE WHENEVER state.recentSearches changes
    React.useEffect(() => {
        localStorage.setItem('recent-names', JSON.stringify(state.recentSearches));
    }, [state.recentSearches])

    // ADD TO LOCALSTORAGE WHENEVER state.favoritePlayers changes
    React.useEffect(() => {
        localStorage.setItem('favorite-names', JSON.stringify(state.favoritePlayers))
    }, [state.favoritePlayers])

    return (
        <SearchContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useGlobalSearchContext = () => {
    return React.useContext(SearchContext);
};