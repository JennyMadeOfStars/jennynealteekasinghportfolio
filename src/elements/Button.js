/**
 * @function Button
 * @description Functional component containing button element
 * @returns {JSX} Markup for the button component
 */
const Button = ({ classes, id, onClick, title }) => {
    return (
        <button 
            onClick={onClick}
            className={classes}
            id={id}>
                &laquo; {title} &raquo;
        </button>
    );
};

export default Button;
