import * as React from 'react';

import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// types
import { ActiveType } from '../../types/interfaces';

import './LineChart.css';
import { getFormatedTime, getFullFormatedTime } from '../../utils/time-converters';

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
    tooltips: {
        titleAlign: 'center',
        bodyAlign: 'center',
        displayColors: false,
        yPadding: 10,
        xPadding: 8,
        callbacks: {
            title: (val: any) => {
                return getFullFormatedTime(val[0].xLabel)
            }
        }
    },
    scales: {
        yAxes: [{
            display: false,
            offset: true,
            ticks: {
                beginAtZero: true,
            },
        }],
        xAxes: [{
            display: true,
            offset: true,
            position: 'bottom',
            ticks: {
                padding: -20,
                autoSkip: false,
                maxRotation: 30,
                minRotation: 30,
                callback: (label: number) => getFormatedTime(label)
            },
        }]
    },
    plugins: {
        datalabels: {
            display: true,
            formatter: (value: { x: number, y: number }) => value.y,
            color: '#fff',
            align: 'end',
            offset: 4,
            fontWeight: 500,
            font: {
                weight: 'bold'
            }
        }
    }
}

const LineChart: React.FC<Props> = ({ recentData, activeTab, changeActiveTab }) => {
    return (
        <div className="linechart-wrapper">
            <div className="linechart-wrapper--tabs">
                <span onClick={() => changeActiveTab('kills')} role="button" className={activeTab === 'kills' ? 'active' : ''}>Kills</span>
                <span onClick={() => changeActiveTab('damageDone')} role="button" className={activeTab === 'damageDone' ? 'active' : ''}>Damage</span>
                <span onClick={() => changeActiveTab('kdRatio')} role="button" className={activeTab === 'kdRatio' ? 'active' : ''}>K/D</span>
            </div>
            <Line
                data={recentData}
                options={options}
                width={1200}
                height={500}
                plugins={[ChartDataLabels]}
            />
        </div>
    );
}

export default LineChart;