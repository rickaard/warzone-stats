import * as React from 'react';
import { useGlobalSearchContext } from '../Store/SearchContext';
import { PlayerStatsData } from '../types/player-stats';
import { RecentMatchesData } from '../types/recent-matches';

export type FetchingStatusType = 'fetching' | 'done' | 'error' | 'idle';


const URL = process.env.API_URL!;



const useFetchPlayerData = (name: string) => {
    const [fetchingStatus, setFetchingStatus] = React.useState<FetchingStatusType>('idle');
    const [recentMatches, setRecentMatches] = React.useState<RecentMatchesData | null>(null);
    const [playerData, setPlayerData] = React.useState<PlayerStatsData | null>(null);
    const { dispatch } = useGlobalSearchContext();


    React.useEffect(() => {
        const bodyData = { codName: name.trim() };

        if (bodyData.codName.length <= 0) {
            return;
        }

        const fetchPlayerData = async () => {
            setFetchingStatus('fetching');
            try {
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyData)
                });
                if (response.status >= 300) {
                    throw Error('Error while fetching playerdata');
                }
                const result = await response.json();
                console.log(result);
            }
            catch (err) {
                console.log('[useFetchPlayerData.tsx] fetching error:', err);
                setFetchingStatus('error');
            }
            finally {
                setFetchingStatus('done')
            }

        };

        fetchPlayerData();

    }, [name])

    return {
        setFetchingStatus,
        isLoading: fetchingStatus === 'fetching',
        error: fetchingStatus === 'error',
        isDone: fetchingStatus === 'done', // rename to success?
        recentMatches,
        playerData
    }
};

export default useFetchPlayerData;