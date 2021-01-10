import * as React from 'react';
import ReactToolTip from 'react-tooltip';
import { AiOutlineStar } from 'react-icons/ai'
// import { FiSearch } from 'react-icons/fi';

import PlayerStatsItemCard from './PlayerStatsItemCard';

import { useGlobalSearchContext } from '../../Store/SearchContext';

// types
import { PlayerStatsData } from '../../types/player-stats';

// styles
import './PlayerStats.css';
import { roundToTwo } from '../../utils/display-data';


interface Props {
    // username: string;
    toggleUpdate: (name: string) => Promise<void>;
    playerData: PlayerStatsData;
};

const PlayerStatsContainer: React.FC<Props> = ({ toggleUpdate, playerData }) => {
    // const [isFav, setIsFav] = React.useState<boolean>(false);
    // const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const { favoritePlayers, dispatch } = useGlobalSearchContext();

    const isFav = () => favoritePlayers?.includes(playerData.username);

    React.useEffect(() => {
        console.log('[PlayerStatsContainer.tsx] - playerStats: ', playerData)
    }, [playerData])

    const toggleFavorite = () => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: playerData.username })
    }

    // const toggleSearch = (event: React.FocusEvent<HTMLInputElement>) => {
    //     event.preventDefault();
    //     console.log('toggleSearch - onFocus');
    //     setIsFocused(true);
    // }

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     // kolla om isFocused, såna fall gör annat
    //     event.preventDefault();
    //     setIsFocused(true);
    //     console.log('handleSubmit')
    // }

    return (
        <div className="playerstats-wrapper">

            <div className="playerstats-wrapper--player">

                <div className="playerstats-wrapper--player_name">
                    <h1>{playerData.username}</h1>
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
                    <PlayerStatsItemCard value={roundToTwo(playerData.lifetime.mode.br.properties.kdRatio)} label="kda" />
                    <PlayerStatsItemCard value={playerData.lifetime.mode.br.properties.kills} label="kills" />
                    <PlayerStatsItemCard value={playerData.lifetime.mode.br.properties.downs} label="downs" />
                    <PlayerStatsItemCard value={playerData.lifetime.mode.br.properties.deaths} label="deaths" />
                </div>
            </div>

            <div className="update-container">
                {/* <form onSubmit={handleSubmit}>
                    <input
                        className={`input-search ${isFocused ? 'focused' : ''}`}
                        onFocus={toggleSearch}
                    />
                    <button className="search-btn"><FiSearch /></button>
                </form> */}
                <button className="btn btn-accent" onClick={() => toggleUpdate(playerData.username)}>update</button>

            </div>

        </div >
    );
}

export default PlayerStatsContainer;