import * as React from 'react';

import SearchPage from './pages/SearchPage';
import LineChart from './components/LineChart/LineChart';
import PlayerStatsContainer from './components/PlayerStats/PlayerStatsContainer';
import Loader from './components/Loader/Loader';
import RecentMatchesList from './components/RecentMatches/RecentMatchesList';


// import { useGlobalSearchContext } from './Store/SearchContext';
import useFetchPlayerData from './hooks/useFetchPlayerData';

// types
import { ActiveType } from "./types/interfaces";
import { RecentMatchesData } from "./types/recent-matches";


// data
import data from './testdata-recent.json';


// helpers
import { roundToTwo } from './utils/display-data';

const getLabelText = (tab: ActiveType) => {
  if (tab === 'damageDone') {
    return 'Damage done'
  }
  if (tab === 'kdRatio') {
    return 'K/D Ratio'
  }
  if (tab === 'kills') {
    return 'Kills'
  }
}


function App() {
  const [activeTab, setActiveTab] = React.useState<ActiveType>('kills');
  // const { favoritePlayers, recentSearches } = useGlobalSearchContext();
  const [recentMatches, setRecentMatches] = React.useState<RecentMatchesData>(data.recentMatches.data);
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [showSearchPage, setShowSearchPage] = React.useState<boolean>(true);
  const { fetchPlayerData, isLoading, hasError, isDone, playerData, showSearchPage, errorMessage } = useFetchPlayerData();



  const changeActiveTab = (tab: ActiveType) => {
    setActiveTab(tab);
  }

  const toggleUpdate = () => {
    // setIsLoading(true);
  }

  // React.useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 600);
  //   }
  // }, [isLoading])

  const chartData = React.useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx?.createLinearGradient(0, 0, 0, 250);
    gradient?.addColorStop(0, 'rgba(14,68,112,1)')
    gradient?.addColorStop(1, 'rgba(14,68,112,.05)')

    return {
      labels: recentMatches.matches.map(i => i.utcStartSeconds).slice(0, 10),
      datasets: [{
        fill: 'start',
        data: recentMatches.matches.map((i) => roundToTwo(i.playerStats[activeTab])).slice(0, 10),
        label: getLabelText(activeTab),
        backgroundColor: gradient,
        borderColor: '#077ea3',
        borderWidth: 1
      }]
    }
  }, [activeTab, recentMatches.matches]);

  if (showSearchPage || hasError) {
    return (
      <div className="container">
        <div className="middle-aligned">
          <SearchPage fetchPlayerData={fetchPlayerData} hasError={hasError} errorMessage={errorMessage}/>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="App">
        <div className="middle-aligned">
          <Loader />
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="container">
        <PlayerStatsContainer username="OJNAB#21824" toggleUpdate={toggleUpdate} />
        <LineChart recentData={chartData} activeTab={activeTab} changeActiveTab={changeActiveTab} />
        <RecentMatchesList recentMatches={recentMatches.matches} />
      </div>
    </div >
  );
}

export default App;
