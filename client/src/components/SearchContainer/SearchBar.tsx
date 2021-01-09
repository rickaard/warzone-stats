import * as React from 'react';

import './SearchBar.css';

interface Props {
    showSearchInstructions: boolean;
};

const SearchBar: React.FC<Props> = ({ showSearchInstructions = true }) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const [isFormFocused, setIsFormFocused] = React.useState<boolean>(false);

    const handleOutsideFormClick = (event: Event) => {
        if (formRef.current?.contains(event.target as Node)) {
            // console.log('[Searchbar.tsx] - klickat INNANFÖR form');
            return;
        }
        // console.log('[Searchbar.tsx] - klickat UTANFÖR form');
        // console.log('[Searchbar.tsx] - event target:', event.target);
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
        console.log('[Search.tsx] - submitted: ', inputValue);
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
                style={{
                    borderBottomLeftRadius: isFormFocused ? '0px' : '6px',
                    borderBottomRightRadius: isFormFocused ? '0px' : '6px'
                }}
            />
            {isFormFocused
                ? <div style={{ width: '100%', height: '100px', background: '#fff' }}>Searchsuggestions</div>
                : null
            }
            {showSearchInstructions
                ? <p className="search-instructions"><span>Search: </span>you have to search for an activision ID, e.g. Ghost#2934</p>
                : null
            }
        </form>
    );
}

export default SearchBar;