// elements
import H2 from '../../elements/H2';

/**
 * @function Services
 * @description Functional component containing text copy
 * @returns {JSX} Markup for the services component
 */
const Services = () => {
    return (
        <div className="about-secton__section about-section__section--services about-section__section-content">
            <H2 title="Services I Offer: Front End Development" />
            <p>Design (including wireframes, logo and layout designs) and Build high quality websites and SPAs (Single Page Applications), with user interaction that contain
                cross-browser support, semantic coding, and disability accessible best practices. Using technologies such as ReactJs, CSS3, NodeJs.
            </p>
        </div>
    );
};

export default Services;
