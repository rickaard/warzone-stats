import * as React from 'react';
import SearchBar from '../components/SearchContainer/SearchBar';

import './SearchPage.css';

interface Props { };

const SearchPage: React.FC<Props> = () => {
    return (
        <div className="searchpage">
            <h1>Warzone Stats</h1>
            <SearchBar showSearchInstructions={true} />
        </div>
    );
}

export default SearchPage;