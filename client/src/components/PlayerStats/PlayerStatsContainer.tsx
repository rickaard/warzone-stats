import * as React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi';
import ReactToolTip from 'react-tooltip';

import PlayerStatsItemCard from './PlayerStatsItemCard';

import './PlayerStats.css';
import { useGlobalSearchContext } from '../../Store/SearchContext';

interface Props {
    username: string;
    toggleUpdate: () => void;
};

const PlayerStatsContainer: React.FC<Props> = ({ username, toggleUpdate }) => {
    // const [isFav, setIsFav] = React.useState<boolean>(false);
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const { favoritePlayers, dispatch } = useGlobalSearchContext();

    const isFav = () => favoritePlayers?.includes(username);

    React.useEffect(() => {
        console.log('[PlayerStatsContainer.tsx] - favoritePlayers: ', favoritePlayers)
    }, [favoritePlayers])

    const toggleFavorite = () => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: username })
    }

    const toggleSearch = (event: React.FocusEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log('toggleSearch - onFocus');
        setIsFocused(true);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // kolla om isFocused, såna fall gör annat
        event.preventDefault();
        setIsFocused(true);
        console.log('handleSubmit')
    }

    return (
        <div className="playerstats-wrapper">

            <div className="playerstats-wrapper--player">

                <div className="playerstats-wrapper--player_name">
                    <h1>{username}</h1>
                    <button
                        className={`btn fav-btn ${isFav() ? 'isFav' : ''}`}
                        data-tip={!isFav ? 'Add to favorite' : 'Remove from favorite'}
                        onClick={toggleFavorite}
                        type="button"
                    >

                        <AiOutlineStar />
                    </button>
                    <ReactToolTip place="right" delayShow={250} effect="solid" />
                </div>

                <div className="playerstats-wrapper--player_stats">
                    <PlayerStatsItemCard value={4338} label="kills" />
                    <PlayerStatsItemCard value={5983} label="downs" />
                    <PlayerStatsItemCard value={2351} label="deaths" />
                </div>
            </div>

            <div className="update-container">
                <form onSubmit={handleSubmit}>
                    <input
                        className={`input-search ${isFocused ? 'focused' : ''}`}
                        onFocus={toggleSearch}
                    />
                    <button className="search-btn"><FiSearch /></button>
                </form>
                {/* <button className="btn btn-search" onClick={toggleSearch}><FiSearch /></button> */}
                <button className="btn btn-accent" onClick={toggleUpdate}>update</button>

            </div>

        </div >
    );
}

export default PlayerStatsContainer;