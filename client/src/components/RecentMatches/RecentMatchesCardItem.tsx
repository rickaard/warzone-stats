import * as React from 'react';
import { Match } from '../../types/recent-matches';
import { addOrdinalNumberSuffix, getFullFormatedTime } from '../../utils/helper-functions';

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
                <div className="content-row--placement">
                    <span className="big-text">{match.playerStats.teamPlacement}</span>
                    <span className="small-text">{addOrdinalNumberSuffix(match.playerStats.teamPlacement)}</span>
                </div>
            </div>
        </section>
    );
}

export default RecentMatchesCardItem;