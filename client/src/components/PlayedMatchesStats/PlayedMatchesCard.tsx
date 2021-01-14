import * as React from 'react';
import DoughnutChart from './DoughnutChart';

interface Props {
    label: string;
    playedData: [number, number];
};

const PlayedMatchesCard: React.FC<Props> = ({ playedData, label }) => {
    return (
        <div className="played-matches--card">
            <h5>{label}:</h5>
            <p>543</p>
            <DoughnutChart playedData={playedData} />
        </div>
    );
}

export default PlayedMatchesCard;