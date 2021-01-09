import * as React from 'react';

import { ShowTabType } from './SearchSuggestions';

interface Props {
    type: ShowTabType;
    isActive: boolean;
    children: JSX.Element;
    setShowType: (type: ShowTabType) => void;
};



const getButtonName = (type: ShowTabType) => {
    if (type === 'recent') return 'Recent searches'
    if (type === 'favorite') return 'Favorites'
}

const SuggestionsButton: React.FC<Props> = ({ type, isActive, children, setShowType }) => {
    return (
        <button className={isActive ? 'active' : ''} onClick={() => setShowType(type)} type="button">
            {children}
            {getButtonName(type)}
        </button>
    );
}

export default SuggestionsButton;