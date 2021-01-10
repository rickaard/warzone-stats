import * as React from 'react';

import { BiTime } from 'react-icons/bi';
import { BsFillStarFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';


import { useGlobalSearchContext } from '../../Store/SearchContext';
import SuggestionsButton from './SuggestionsButton';


interface Props {
    show: boolean;
    fetchPlayerData: (name: string) => void;
};

export type ShowTabType = 'recent' | 'favorite';

const SearchSuggestions: React.FC<Props> = ({ show, fetchPlayerData }) => {
    const [showType, setShowType] = React.useState<ShowTabType>('recent');
    const { favoritePlayers, recentSearches, dispatch } = useGlobalSearchContext();

    const isInFav = (name: string) => favoritePlayers.includes(name);

    const toggleFavorite = (name: string) => dispatch({ type: 'TOGGLE_FAVORITE', payload: name });



    const displaySearchList = (type: ShowTabType) => {
        if (type === 'recent') {
            return (
                <>
                    <h5>Your 5 most recent searches:</h5>
                    <ul>
                        {recentSearches.length > 0
                            ? recentSearches.map((name: string, index: number) => (
                                <li key={index} className={isInFav(name) ? 'isFav' : ''}>
                                    <span onClick={() => fetchPlayerData(name)}>{name}</span>
                                    <BsFillStarFill onClick={() => toggleFavorite(name)} />
                                </li>
                            ))
                            : null
                        }
                    </ul>
                </>
            )
        }
        if (type === 'favorite') {
            return (
                <>
                    <h5>Favorites:</h5>
                    <ul>
                        {favoritePlayers.length > 0
                            ? favoritePlayers.map((name: string, index: number) => (
                                <li key={index}>
                                    <span onClick={() => fetchPlayerData(name)}>{name}</span>
                                    <FaTimes onClick={() => toggleFavorite(name)} />
                                </li>
                            ))
                            : null
                        }
                    </ul>
                </>
            )
        }
    }


    return (
        <div className={`search-suggestions ${show ? 'show' : ''}`}>
            <div className="buttons-wrapper">
                <SuggestionsButton isActive={showType === 'recent'} setShowType={setShowType} type='recent'>
                    <BiTime />
                </SuggestionsButton>
                <SuggestionsButton isActive={showType === 'favorite'} setShowType={setShowType} type='favorite'>
                    <BsFillStarFill />
                </SuggestionsButton>
            </div>
            <div className="player-names">
                {displaySearchList(showType)}
            </div>
        </div>
    );
}

export default SearchSuggestions;