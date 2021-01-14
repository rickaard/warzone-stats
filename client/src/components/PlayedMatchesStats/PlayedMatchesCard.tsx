import * as React from 'react';
import DoughnutChart from './DoughnutChart';

interface Props {
    label: string;
    playedData: [number, number];
    doughnutPieceColor: string;
};

const PlayedMatchesCard: React.FC<Props> = ({ playedData, label, doughnutPieceColor }) => {
    return (
        <div className="played-matches--card">
            <h5>{label}:</h5>
            <p>{playedData[1]}</p>
            <DoughnutChart playedData={playedData} doughnutPieceColor={doughnutPieceColor}/>
        </div>
    );
}

export default PlayedMatchesCard;