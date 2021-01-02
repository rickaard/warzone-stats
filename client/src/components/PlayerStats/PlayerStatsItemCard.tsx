import * as React from 'react';

interface Props {
    value: number;
    label: string;
};

const PlayerStatsItemCard: React.FC<Props> = ({ value, label }) => {
    return (
        <div className="player_stats--card-item">
            <span>{value}</span>
            <span>{label}</span>
        </div>
    );
}

export default PlayerStatsItemCard;