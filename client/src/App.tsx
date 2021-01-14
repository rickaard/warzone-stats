import * as React from 'react';

// components
import SearchPage from './pages/SearchPage';
import LineChart from './components/LineChart/LineChart';
import PlayerStatsContainer from './components/PlayerStats/PlayerStatsContainer';
import Loader from './components/Loader/Loader';
import RecentMatchesList from './components/RecentMatches/RecentMatchesList';

// hooks
import useFetchPlayerData from './hooks/useFetchPlayerData';

// types
import { ActiveType } from "./types/interfaces";
import PlayedMatchesContainer from './components/PlayedMatchesStats/PlayedMatchesContainer';


function App() {
  const [activeTab, setActiveTab] = React.useState<ActiveType>('kills');
  const { fetchPlayerData, isLoading, hasError, playerData, errorMessage, recentMatches } = useFetchPlayerData();


  const changeActiveTab = (tab: ActiveType) => {
    setActiveTab(tab);
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

  if (recentMatches && playerData) {
    return (
      <div className="App">
        <div className="container">
          <PlayerStatsContainer toggleUpdate={fetchPlayerData} playerData={playerData}/>
          <LineChart recentMatches={recentMatches} activeTab={activeTab} changeActiveTab={changeActiveTab} />
          <PlayedMatchesContainer 
            totalMatches={playerData.lifetime.mode.br.properties.gamesPlayed}
            top25={playerData.lifetime.mode.br.properties.topTwentyFive}
            top10={playerData.lifetime.mode.br.properties.topTen}
            top5={playerData.lifetime.mode.br.properties.topFive}
            wins={playerData.lifetime.mode.br.properties.wins}
            />
          <RecentMatchesList recentMatches={recentMatches.matches} />
        </div>
      </div >
    );
  }

  return (
    <div className="container">
      <div className="middle-aligned">
        <SearchPage fetchPlayerData={fetchPlayerData} hasError={hasError} errorMessage={errorMessage} />
      </div>
    </div>
  )


}

export default App;
