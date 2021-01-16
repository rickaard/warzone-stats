import * as React from 'react';

import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const doughnutOptions = {
    responsive: true,
    legend: {
        display: false
    },
    tooltips: {
        enabled: false,
    },
    elements: {
        arc: {
            borderWidth: 3,
            borderColor: '#1a1c2b',
        }
    },
    plugins: {
        datalabels: {
            display: false,
        }
    },
    datasetRadiusBuffer: 25,
    cutoutPercentage: 50,
}

interface Props {
    playedData: [number, number];
    doughnutPieceColor: string;
};

const DoughnutChart: React.FC<Props> = ({ playedData, doughnutPieceColor }) => {

    const getDoughnoutData = React.useCallback((canvas: HTMLCanvasElement) => {
 
        return {
            datasets: [
                {
                    data: playedData,
                    backgroundColor: ['#ffffff1f', doughnutPieceColor],
                },
            ],
        };
    }, [playedData, doughnutPieceColor])

    return (
        <div className="dougnut-wrapper">
            <div className="centered-value">
                <h6>{(playedData[1] / playedData[0] * 100).toFixed(1)}%</h6>
            </div>
            <Doughnut
                data={getDoughnoutData}
                options={doughnutOptions}
                plugins={[ChartDataLabels]}
            />
        </div>
    );
}

export default DoughnutChart;