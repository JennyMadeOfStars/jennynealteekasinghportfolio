/**
 * @function H2
 * @description Functional component containing heading element
 * @returns {JSX} Markup for the h2 heading component
 */
const H2 = ({title}) => {
    return (
        <h2>
            <span className='rainbow'>{title}</span>
        </h2>
    );
};

export default H2;
