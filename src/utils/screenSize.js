// Predefined breakpoints for application
const screenSizes = {
    small: 768,
    large: 769,
};

/**
 * @function screen
 * @description Calculates the screen size
 * @returns {string} Breakpoint size of window
 */
const screen = () => {
    return window.innerWidth <= screenSizes.small ? 'small' : 'large';
};

export default screen;
