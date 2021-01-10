import * as React from 'react';



import './SearchBar.css';
import SearchSuggestions from './SearchSuggestions';

interface Props {
    showSearchInstructions: boolean;
    fetchPlayerData: (name: string) => void;
};

const SearchBar: React.FC<Props> = ({ fetchPlayerData, showSearchInstructions = true }) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const [isFormFocused, setIsFormFocused] = React.useState<boolean>(false);

    const handleOutsideFormClick = (event: Event) => {
        if (formRef.current?.contains(event.target as Node)) {
            return;
        }
        setIsFormFocused(false)
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideFormClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideFormClick);
        }
    }, [])


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inputValue.trim()) {
            return;
        }

        fetchPlayerData(inputValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleFocus = () => setIsFormFocused(true);

    return (
        <form onSubmit={handleFormSubmit} className="form-wrapper" ref={formRef} onFocus={handleFocus}>
            <label className="label-hidden" htmlFor="search"></label>
            <input
                id="search"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for a Warzone player"
                className={isFormFocused ? 'focused' : ''}
            />
            <SearchSuggestions show={isFormFocused} fetchPlayerData={fetchPlayerData}/>
            {showSearchInstructions
                ? <p className="search-instructions"><span>Search: </span>you have to search for an activision ID, e.g. Ghost#2934</p>
                : null
            }
        </form>
    );
}

export default SearchBar;