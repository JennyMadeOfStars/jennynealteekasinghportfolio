// libraries
import { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

// elements
import Button from '../../elements/Button';

// data
import navLinks from '../../data/nav-links';

/**
 * @function NavElements
 * @description Functional component containing navigation data list
 * @returns {JSX} Markup for the navigation elements component
 */
const NavElements = ({children, onCloseOverlay, closeNavElm}) => {
    const rootElm = document.getElementById('body');
    const MODES = ['sun', 'moon'];
    const [isMoonMode, setMode] = useState(rootElm.classList.contains('moon'));

    const toggleDisplayClass = () => {
        MODES.forEach(mode => { 
            rootElm.classList.toggle(mode) 
        });
    };

    const setModeHandler = () => {
        setMode(!isMoonMode);
        toggleDisplayClass();
    };

    return (
        <>
            <nav>
                <Link to='/' className="specialty logo" onClick={onCloseOverlay}>Jennifer Neal-Teekasingh</Link>
                {closeNavElm}
                <ul className="main-navigation">
                    {
                        Object.keys(navLinks).map(link =>
                            <li key={link}>
                                <NavLink to={`/${navLinks[link].link}`} onClick={onCloseOverlay}>
                                    {navLinks[link].name}
                                </NavLink>
                            </li>
                        )
                    }
                    <li>
                        <Button
                            classes="toggle-button rainbow"
                            id="toggle-button"
                            onClick={setModeHandler}
                            title="Moon / Sun Mode" />
                    </li>
                </ul>
                {children}
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default NavElements;
