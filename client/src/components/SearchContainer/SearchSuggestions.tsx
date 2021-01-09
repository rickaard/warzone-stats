import * as React from 'react';
import { BiTime } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa';


import { useGlobalSearchContext } from '../../Store/SearchContext';
import SuggestionsButton from './SuggestionsButton';


interface Props {
    show: boolean;
};

export type ShowTabType = 'recent' | 'favorite';

const SearchSuggestions: React.FC<Props> = ({ show }) => {
    const [showType, setShowType] = React.useState<ShowTabType>('recent');
    const { favoritePlayers, recentSearches, dispatch } = useGlobalSearchContext();

    const isInFav = (name: string) => favoritePlayers.includes(name);

    const removeFromFavorite = (name: string) => console.log('Remove player: ', name);

    const addToFavorite = (name: string) => dispatch({ type: 'TOGGLE_FAVORITE', payload: name });

    const fetchPlayerData = (name: string) => console.log('Fetch player data: ', name);

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
                                    <AiOutlineStar onClick={() => addToFavorite(name)} />
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
                                    <FaTimes onClick={() => removeFromFavorite(name)} />
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
                    <AiOutlineStar />
                </SuggestionsButton>
            </div>
            <div className="player-names">
                {displaySearchList(showType)}
            </div>
        </div>
    );
}

export default SearchSuggestions;