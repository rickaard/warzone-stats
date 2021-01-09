import * as React from 'react';
import { useGlobalSearchContext } from '../../Store/SearchContext';
import { Match } from '../../types/recent-matches';

import RecentMatchesCardItem from './RecentMatchesCardItem';

import './RecentMatchesList.css';

interface Props {
    recentMatches: Match[];
};

const RecentMatchesContainer: React.FC<Props> = ({ recentMatches }) => {
    const { favoritePlayers } = useGlobalSearchContext();

    React.useEffect(() => {
        console.log('[RecentMatchesList.tsx] - favoritePlayers: ', favoritePlayers)
    }, [favoritePlayers])

    return (
        <div className="recent-matches--wrapper">
            {recentMatches.map(match => {
                return <RecentMatchesCardItem match={match} key={match.matchID} />
            })}
        </div>
    );
}

export default RecentMatchesContainer;