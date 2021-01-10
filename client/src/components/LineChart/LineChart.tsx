import * as React from 'react';

import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// types
import { ActiveType } from '../../types/interfaces';
import { RecentMatchesData } from '../../types/recent-matches';

import './LineChart.css';

// helpers
import { getFormatedTime, getFullFormatedTime } from '../../utils/time-converters';
import { roundToTwo } from '../../utils/display-data';



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
            offset: 3,
            fontWeight: 500,
            font: {
                weight: 'bold'
            }
        }
    }
};

const getLabelText = (tab: ActiveType): string | void => {
    if (tab === 'damageDone') {
        return 'Damage done'
    }
    if (tab === 'kdRatio') {
        return 'K/D Ratio'
    }
    if (tab === 'kills') {
        return 'Kills'
    }
    return;
}

interface Props {
    activeTab: ActiveType;
    changeActiveTab: (tab: ActiveType) => void;
    recentMatches: RecentMatchesData;
};

const LineChart: React.FC<Props> = ({ recentMatches, activeTab, changeActiveTab }) => {

    const chartData = React.useCallback((canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx?.createLinearGradient(0, 0, 0, 250);
        gradient?.addColorStop(0, 'rgba(14,68,112,1)')
        gradient?.addColorStop(1, 'rgba(14,68,112,.05)')

        return {
            labels: recentMatches.matches.map(i => i.utcStartSeconds).slice(0, 12),
            datasets: [{
                fill: 'start',
                data: recentMatches.matches.map((i) => {
                    // sometimes the warzone API does not provide a KDA
                    if (!i.playerStats[activeTab]) {
                        const deaths = i.playerStats.deaths > 0 ? i.playerStats.deaths : 1;
                        const kda = i.playerStats.kills / deaths;
                        return roundToTwo(kda);
                    }
                    return roundToTwo(i.playerStats[activeTab])
                }).slice(0, 12),
                label: getLabelText(activeTab),
                backgroundColor: gradient,
                borderColor: '#077ea3',
                borderWidth: 1
            }]
        }
    }, [activeTab, recentMatches.matches]);


    return (
        <div className="linechart-wrapper">
            <div className="linechart-wrapper--tabs">
                <span onClick={() => changeActiveTab('kills')} role="button" className={activeTab === 'kills' ? 'active' : ''}>Kills</span>
                <span onClick={() => changeActiveTab('damageDone')} role="button" className={activeTab === 'damageDone' ? 'active' : ''}>Damage</span>
                <span onClick={() => changeActiveTab('kdRatio')} role="button" className={activeTab === 'kdRatio' ? 'active' : ''}>K/D</span>
            </div>
            <Line
                data={chartData}
                options={options}
                width={1200}
                height={500}
                plugins={[ChartDataLabels]}
            />
        </div>
    );
}

export default LineChart;