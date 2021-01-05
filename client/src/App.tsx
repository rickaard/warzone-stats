import * as React from 'react';

import LineChart from './components/LineChart/LineChart';
import PlayerStatsContainer from './components/PlayerStats/PlayerStatsContainer';
// import { useGlobalSearchContext } from './Store/SearchContext';

// types
import { ActiveType } from "./interfaces";

// helpers
import { getFormatedTime } from "./utils/helper-functions";

function roundToTwo(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}


const data = [
  { utcStartSeconds: 1609411162, kills: 3, damageDone: 1148, kdRatio: roundToTwo(0.333333) },
  { utcStartSeconds: 1609409648, kills: 20, damageDone: 533, kdRatio: roundToTwo(1.5) },
  { utcStartSeconds: 1609408227, kills: 5, damageDone: 450, kdRatio: roundToTwo(0.5) },
  { utcStartSeconds: 1609363522, kills: 3, damageDone: 1238, kdRatio: roundToTwo(3) },
  { utcStartSeconds: 1609362592, kills: 8, damageDone: 1042, kdRatio: roundToTwo(0.25) },
  { utcStartSeconds: 1609362023, kills: 1, damageDone: 1198, kdRatio: roundToTwo(2) },
  { utcStartSeconds: 1609361153, kills: 0, damageDone: 2908, kdRatio: roundToTwo(5) },
  { utcStartSeconds: 1609359666, kills: 2, damageDone: 194, kdRatio: roundToTwo(0.5) },
  { utcStartSeconds: 1609358824, kills: 7, damageDone: 2080, kdRatio: roundToTwo(1.5) },
  { utcStartSeconds: 1609276252, kills: 1, damageDone: 1052, kdRatio: roundToTwo(1) },
]






function App() {
  const [activeTab, setActiveTab] = React.useState<ActiveType>('kills');
  // const { favoritePlayers, recentSearches } = useGlobalSearchContext();


  const changeActiveTab = (tab: ActiveType) => {
    setActiveTab(tab);
  }

  const chartData = React.useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx?.createLinearGradient(0, 0, 0, 250);
    gradient?.addColorStop(0, 'rgba(14,68,112,1)')
    gradient?.addColorStop(1, 'rgba(14,68,112,.05)')

    return {
      labels: data.map(i => getFormatedTime(i.utcStartSeconds)),
      datasets: [{
        fill: 'start',
        data: data.map((i) => i[activeTab]),
        label: 'kills',
        backgroundColor: gradient,
        borderColor: '#077ea3',
        borderWidth: 1
      }]
    }
  }, [activeTab])


  return (
    <div className="App">
      <div className="hero-wrapper">

        <PlayerStatsContainer username="OJNAB#21824" />

        <LineChart recentData={chartData} activeTab={activeTab} changeActiveTab={changeActiveTab} />

      </div>
    </div>
  );
}

export default App;
