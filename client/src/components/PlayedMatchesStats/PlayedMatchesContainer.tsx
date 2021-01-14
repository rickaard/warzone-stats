import * as React from 'react';
import PlayedMatchesCard from './PlayedMatchesCard';

import './PlayedMatches.css';

interface Props {
    totalMatches: number;
    top25: number;
    top10: number;
    top5: number;
    wins: number;
};

const PlayedMatchesContainer: React.FC<Props> = ({ totalMatches, top25, top10, top5, wins }) => {
    return (
        <section className="matches-history-wrapper">
            <div className="top-row">
                <h5>Total matched played: {totalMatches}</h5>
            </div>

            <div className="played-matches--container">
                <PlayedMatchesCard playedData={[totalMatches, top25]} label="Top 25" doughnutPieceColor="#795108"/>
                <PlayedMatchesCard playedData={[totalMatches, top10]} label="Top 10" doughnutPieceColor="#093a6f"/>
                <PlayedMatchesCard playedData={[totalMatches, top5]} label="Top 5" doughnutPieceColor="#044604"/>
                <PlayedMatchesCard playedData={[totalMatches, wins]} label="Wins" doughnutPieceColor="#fdd709"/>
            </div>
        </section>
    );
}

export default PlayedMatchesContainer;