import * as React from 'react';

import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getDoughtPieceColor } from '../../utils/display-data';


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

const DoughnutChart: React.FC<Props> = ({ playedData, doughnutPieceColor}) => {

    const getDoughnoutData = React.useCallback((canvas: HTMLCanvasElement) => {
        // const ctx = canvas.getContext('2d');
        // const width = canvas.width;
        // const height = canvas.height;

        // const fontSize = (height / 70).toFixed(2);
        // ctx!.font = fontSize + "em sans-serif";
        // ctx!.textBaseline = "middle";

        // // const text = playedData[1].toString();
        // const text = "213";
        // const textY = Math.round((width - ctx!.measureText(text).width) / 2);
        // const textX = height / 2;

        // ctx?.fillText(text, textX, textY);
        // ctx!.save();


        return {
            datasets: [
                {
                    data: playedData,
                    // backgroundColor: ['#ffffff1f', '#ffd700'],
                    backgroundColor: ['#ffffff1f', doughnutPieceColor],
                },
            ],
        };
    }, [playedData, doughnutPieceColor])

    return (
        <div className="dougnut-wrapper">
            <Doughnut
                data={getDoughnoutData}
                options={doughnutOptions}
                plugins={[ChartDataLabels]}
            />
        </div>
    );
}

export default DoughnutChart;