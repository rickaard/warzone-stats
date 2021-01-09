import * as React from 'react';
import { Match } from '../../types/recent-matches';
import { addOrdinalNumberSuffix, brMode, roundToTwo } from '../../utils/display-data';
import { getFullFormatedTime } from '../../utils/time-converters';

interface Props {
    match: Match
};

const RecentMatchesCardItem: React.FC<Props> = ({ match }) => {



    return (
        <section className="match-item">
            <div className="top-row">
                <h5>{getFullFormatedTime(match.utcStartSeconds)}</h5>
            </div>
            <div className="content-row">
                <div className={`content-item content-row--placement ${match.playerStats.teamPlacement <= 5 ? 'gold' : match.playerStats.teamPlacement <= 10 ? 'silver' : ''}`}>
                    <span className="big-text">{match.playerStats.teamPlacement}</span>
                    <span className="small-text">{addOrdinalNumberSuffix(match.playerStats.teamPlacement)}</span>
                </div>
                <div className="content-item type">
                    <h6 className="type--header">Mode</h6>
                    <h6 className="type--stats">{brMode(match.mode)}</h6>
                </div>
                <div className="content-item type">
                    <h6 className="type--header">Kills</h6>
                    <h6 className="type--stats">{match.playerStats.kills}</h6>
                </div>
                <div className="content-item type">
                    <h6 className="type--header">Deaths</h6>
                    <h6 className="type--stats">{match.playerStats.deaths}</h6>
                </div>
                <div className="content-item type">
                    <h6 className="type--header">KDA</h6>
                    <h6 className="type--stats">{roundToTwo(match.playerStats.kdRatio)}</h6>
                </div>
            </div>
        </section>
    );
}

export default RecentMatchesCardItem;