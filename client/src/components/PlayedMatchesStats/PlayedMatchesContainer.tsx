import * as React from 'react';
import PlayedMatchesCard from './PlayedMatchesCard';

import './PlayedMatches.css';

interface Props { };

// const played = 1583;
// const top5 = 543;

const PlayedMatchesContainer: React.FC<Props> = () => {
    return (
        <div className="played-matches--container">
            <PlayedMatchesCard playedData={[1583, 0]} label="Total played"/>
            <PlayedMatchesCard playedData={[1583, 683]} label="Top 25"/>
            <PlayedMatchesCard playedData={[1583, 400]} label="Top 10"/>
            <PlayedMatchesCard playedData={[1583, 61]} label="Wins"/>
        </div>
    );
}

export default PlayedMatchesContainer;