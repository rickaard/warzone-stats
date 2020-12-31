import * as React from 'react';

import { Line } from 'react-chartjs-2';

// types
import { ActiveType } from "../../interfaces";

import './LineChart.css';

interface Props {
    recentData: any;
    activeTab: string;
    changeActiveTab: (tab: ActiveType) => void;
};

const options = {
    responsive: true,
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
            }
        }],
    },
}

const LineChart: React.FC<Props> = ({ recentData, activeTab, changeActiveTab }) => {
    return (
        <div className="linechart-wrapper">
            <div className="linechart-wrapper--tabs">
                <span onClick={() => changeActiveTab('kills')} role="button" className={activeTab === 'kills' ? 'active' : ''}>Kills</span>
                <span onClick={() => changeActiveTab('damage')} role="button" className={activeTab === 'damage' ? 'active' : ''}>Damage</span>
                <span onClick={() => changeActiveTab('k/d')} role="button" className={activeTab === 'k/d' ? 'active' : ''}>K/D</span>
            </div>
            <Line
                data={recentData}
                options={options}
                width={600}
                height={250}
            />
        </div>
    );
}

export default LineChart;