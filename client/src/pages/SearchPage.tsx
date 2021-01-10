import * as React from 'react';
import SearchBar from '../components/SearchContainer/SearchBar';

import './SearchPage.css';

interface Props {
    fetchPlayerData: (name: string) => void;
    hasError: boolean;
    errorMessage: string;
};

const SearchPage: React.FC<Props> = ({ fetchPlayerData, hasError, errorMessage }) => {
    return (
        <div className="searchpage">
            <h1>Warzone Stats</h1>
            <SearchBar showSearchInstructions={true} fetchPlayerData={fetchPlayerData} />
            {hasError
                ? <p className="error-msg">{errorMessage}</p>
                : null
            }
        </div>
    );
}

export default SearchPage;