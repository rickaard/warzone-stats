import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiRefreshCcw } from 'react-icons/fi';
import SearchSuggestions from '../SearchContainer/SearchSuggestions';

import './SearchAndUpdate.css';

interface Props {
    toggleUpdate: (name: string) => Promise<void>;
    username: string;
};

const SearchAndUpdateComponents: React.FC<Props> = ({ toggleUpdate, username }) => {
    const [searchValue, setSearchValue] = React.useState<string>('');
    const [isFormFocused, setIsFormFocused] = React.useState<boolean>(false);
    const [showForm, setShowForm] = React.useState<boolean>(false);
    const formRef = React.useRef<HTMLFormElement | null>(null);

    const handleOutsideFormClick = (event: Event) => {
        if (formRef.current?.contains(event.target as Node)) {
            return;
        }
        setIsFormFocused(false);
        setShowForm(false);
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideFormClick);
        return () => document.removeEventListener('mousedown', handleOutsideFormClick);
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toggleUpdate(searchValue);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    const fetchPlayerData = (name: string) => toggleUpdate(name);

    return (
        <div className="update-container">

            <div className={`search-form--container ${showForm ? 'show' : ''}`}>

                <form onSubmit={handleSubmit} ref={formRef}>
                    <label className="label-hidden" htmlFor="search"></label>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleChange}
                        placeholder="Search for a player"
                        className={isFormFocused ? 'focused' : ''}
                        autoComplete="off"
                        onFocus={() => setIsFormFocused(true)}
                    />
                    <SearchSuggestions show={isFormFocused} fetchPlayerData={fetchPlayerData} />
                </form>

            </div>


            <div className="search-btn--container">
                <button className="search-btn" onClick={() => setShowForm(true)}><FiSearch /></button>
            </div>


            <button className="btn btn-accent mobile-hide" onClick={() => toggleUpdate(username)}>update</button>
            <div className="refresh-btn--container mobile-show">
                <button className="refresh-btn" onClick={() => toggleUpdate(username)}><FiRefreshCcw /></button>
            </div>

        </div>
    );
}

export default SearchAndUpdateComponents;