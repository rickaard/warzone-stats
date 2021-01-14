import * as React from 'react';
import { Match } from '../../types/recent-matches';

import RecentMatchesCardItem from './RecentMatchesCardItem';

import './RecentMatchesList.css';

interface Props {
    recentMatches: Match[];
};

const RecentMatchesContainer: React.FC<Props> = ({ recentMatches }) => {


    return (
        <section className="recent-matches--wrapper">
            {recentMatches.map(match => {
                return <RecentMatchesCardItem match={match} key={match.matchID} />
            })}
        </section>
    );
}

export default RecentMatchesContainer;