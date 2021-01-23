import * as React from 'react';

import { useGlobalSearchContext } from '../Store/SearchContext';
import { PlayerStatsData } from '../types/player-stats';
import { RecentMatchesData } from '../types/recent-matches';
import { CustomError } from '../utils/error-handler';

export type FetchingStatusType = 'loading' | 'done' | 'error' | 'idle';


const URL = process.env.REACT_APP_API_URL!;


const useFetchPlayerData = () => {
    const [fetchingStatus, setFetchingStatus] = React.useState<FetchingStatusType>('idle');
    const [recentMatches, setRecentMatches] = React.useState<RecentMatchesData | null>(null);
    const [playerData, setPlayerData] = React.useState<PlayerStatsData | null>(null);
    const [errorMessage, setErrorMessage] = React.useState<string>('');
    const { dispatch } = useGlobalSearchContext();

    const fetchPlayerData = async (name: string) => {
        const bodyData = { codName: name };
        setFetchingStatus('loading');
        setErrorMessage('');
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            });
            if (response.status === 404) {
                throw new CustomError('No user found. Try again.');
            }
            if (response.status >= 300) {
                throw new CustomError('Error while fetching playerdata. Try again later.');
            }
            const result = await response.json();

            // console.log('[useFetchPlayerData.tsx] - Result: ',result);

            // only add a new name to the recent searches if the fetching was successfull, i.e there's a user with that name
            dispatch({ type: 'ADD_TO_RECENT', payload: name });
            setRecentMatches(result.recentMatches.data);
            setPlayerData(result.playerStats.data)
            setFetchingStatus('done');
        }
        catch (err) {
            setFetchingStatus('error');
            if (err instanceof CustomError) {
                setErrorMessage(err.message);
            } else {
                setErrorMessage('Something went wrong. Try again later.');
            }
            // console.log('[useFetchPlayerData.tsx] fetching error:', err);
        }

    };


    return {
        fetchPlayerData,
        isLoading: fetchingStatus === 'loading',
        hasError: fetchingStatus === 'error',
        isDone: fetchingStatus === 'done', // rename to success?
        showSearchPage: fetchingStatus === 'idle',
        recentMatches,
        playerData,
        errorMessage
    }
};

export default useFetchPlayerData;