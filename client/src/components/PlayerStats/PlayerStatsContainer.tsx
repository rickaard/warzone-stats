import * as React from 'react';

import PlayerStatsItemCard from './PlayerStatsItemCard';

import './PlayerStats.css';

interface Props {
    username: string;
};

const PlayerStatsContainer: React.FC<Props> = ({ username }) => {
    return (
        <div className="playerstats-wrapper">

            <div className="playerstats-wrapper--player">
                <h1>{username}</h1>
                <div className="playerstats-wrapper--player_stats">
                    <PlayerStatsItemCard value={4338} label="kills" />
                    <PlayerStatsItemCard value={5983} label="downs" />
                    <PlayerStatsItemCard value={2351} label="deaths" />
                </div>
            </div>

            <div className="update-container">
                <button className="btn btn-accent">update</button>

            </div>

        </div>
    );
}

export default PlayerStatsContainer;