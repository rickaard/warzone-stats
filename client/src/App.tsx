import * as React from 'react';

import LineChart from './components/LineChart/LineChart';

// types
import { ActiveType } from "./interfaces";

// helpers
import { getFormatedTime } from "./utils/helper-functions";

// kills
const data = [
  { x: 1609411162, y: 3 },
  { x: 1609409648, y: 2 },
  { x: 1609408227, y: 5 },
  { x: 1609363522, y: 3 },
  { x: 1609362592, y: 4 },
  { x: 1609362023, y: 1 },
  { x: 1609361153, y: 1 },
  { x: 1609359666, y: 2 },
  { x: 1609358824, y: 1 },
  { x: 1609276252, y: 1 },
  // { x: 1609274813, y: 0 },
  // { x: 1609273200, y: 3 },
  // { x: 1609271694, y: 2 },
  // { x: 1609270113, y: 5 },
  // { x: 1609268254, y: 6 },
  // { x: 1609069037, y: 0 },
  // { x: 1609068008, y: 2 },
  // { x: 1609066830, y: 1 },
  // { x: 1609065901, y: 2 },
  // { x: 1609019569, y: 0 },
]

const chartData = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  const gradient = ctx?.createLinearGradient(0, 0, 0, 250);
  gradient?.addColorStop(0, 'rgba(14,68,112,1)')
  gradient?.addColorStop(1, 'rgba(14,68,112,.05)')
  // gradient?.addColorStop(1, 'rgba(19,20,29,1)');

  return {
    labels: data.map(i => getFormatedTime(i.x)),
    datasets: [{
      fill: 'start',
      data: data,
      legend: {
        display: false
      },
      backgroundColor: gradient,
      // backgroundColor: [
      //   'rgba(255, 99, 132, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)'
      // ],
      borderColor: '#077ea3',
      borderWidth: 1
    }]
  }
}




function App() {
  const [activeTab, setActiveTab] = React.useState<ActiveType>('kills');

  const changeActiveTab = (tab: ActiveType) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <div className="hero-wrapper">
        <div className="hero-wrapper--player">
          <h1>OJNAB#21824</h1>
          <div className="hero-wrapper--player_stats">
            <div className="player_stats--card-item">
              <span>4338</span><span>kills</span>
            </div>
            <div className="player_stats--card-item">
              <span>5983</span><span>downs</span>
            </div>
            <div className="player_stats--card-item">
              <span>2351</span><span>deaths</span>
            </div>
          </div>
        </div>
        <LineChart recentData={chartData} activeTab={activeTab} changeActiveTab={changeActiveTab} />
      </div>
    </div>
  );
}

export default App;
