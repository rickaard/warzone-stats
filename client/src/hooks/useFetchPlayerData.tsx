import * as React from 'react';
import { useGlobalSearchContext } from '../Store/SearchContext';
import { PlayerStatsData } from '../types/player-stats';
import { RecentMatchesData } from '../types/recent-matches';

export type FetchingStatusType = 'fetching' | 'success' | 'error' | 'idle';


const URL = process.env.API_URL!;

const fetchPlayerData = async (data: { codName: string }) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

const useFetchPlayerData = (name: string) => {
    const [fetchingStatus, setFetchingStatus] = React.useState<FetchingStatusType>('idle');
    const [recentMatches, setRecentMatches] = React.useState<RecentMatchesData | null>(null);
    const [playerData, setPlayerData] = React.useState<PlayerStatsData | null>(null);


    React.useEffect(() => {
        const bodyData = { codName: name.trim() };

        if (bodyData.codName.length <= 0) {
            return;
        }

        setFetchingStatus('fetching')
        try {
            fetchPlayerData(bodyData);
        } 
        catch (err) {
            setFetchingStatus('error');
        }
        finally {
            setFetchingStatus('success');
        }




    }, [name])

    return {
        setFetchingStatus,
        isLoading: fetchingStatus === 'fetching',
        isError: fetchingStatus === 'error',
        isSuccess: fetchingStatus === 'success',
    }
};

export default useFetchPlayerData;