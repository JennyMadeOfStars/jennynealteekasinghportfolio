import React, { useState } from 'react';
import Button from '../../elements/Button';

const HideShowList = ({list, listType}) => {
    const [isListActive, setIsListActive] = useState(false);
    const toggleListHandler = () => {
        setIsListActive(!isListActive);
    };

    return (
        <>
            <Button
                onClick={toggleListHandler}
                classes="rainbow"
                title={`${isListActive ? 'Hide' : 'Show'} ${listType} List`} />
            <ul className={`hide-show-list ${isListActive ? 'active' : ''}`}>
                { list &&
                    list.map((list, index) => 
                        <li key={index}><span>-</span> <span>{list}</span></li>
                )}
            </ul>
           
        </>
    );
};

export default HideShowList;