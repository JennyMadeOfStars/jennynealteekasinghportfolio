// constants
import screenSizes from '../../constants/screenSizes';

// components
import SmallNavigation from './SmallNavigation';
import NavElements from './NavElements';

/**
 * @function Navigation
 * @description Functional component rendering naviagation based on screen size
 * @returns {JSX} Markup for the navigation component
 */
const Navigation = ({ screenSize }) => {
    return screenSize === screenSizes.SMALL ? <SmallNavigation /> : <NavElements />;
};

export default Navigation;
