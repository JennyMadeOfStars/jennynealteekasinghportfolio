// libraries
import { useEffect, useState } from 'react';

// components
import SideNav from './SideNav';
import NavElements from './NavElements';

// elements
import Button from '../../elements/Button';

/**
 * @function SmallNavigation
 * @description Functional component handling small screen navigation functionality
 * @returns {JSX} Markup for the small navigation component
 */
const SmallNavigation = () => {
    const [menuStateActive, setMenuStateActive] = useState(false);
    const bodyElm = document.getElementsByTagName('body')[0];

    useEffect(() => {
        bodyElm.style.position = menuStateActive ? 'fixed' : '';
        bodyElm.classList[menuStateActive ? 'add': 'remove']('fixed');
    }, [bodyElm, menuStateActive]);

    const setMenuStateHandler = () => {
        setMenuStateActive(!menuStateActive);
    };

    const onCloseOverlay = () => {
        setMenuStateActive(false);
    };

    const closeNavElm = (
        <Button 
            onClick={setMenuStateHandler} 
            classes="small-navigation__cta rainbow"
            title={`${menuStateActive ? 'Close' : 'Menu'}`} />
    );

    return (
        <div className={`small-navigation ${menuStateActive ? 'active' : '' }`}>
            <div className="small-navigation__overlay" onClick={onCloseOverlay}></div>
            <NavElements onCloseOverlay={onCloseOverlay} closeNavElm={closeNavElm}>
                <SideNav />
            </NavElements>
        </div>
    );
};

export default SmallNavigation;
