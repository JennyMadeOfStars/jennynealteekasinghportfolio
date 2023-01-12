// components
import SideNav from '../components/nav/SideNav';

// constants
import screenSizes from '../constants/screenSizes';

/**
 * @function Contact
 * @description Functional component containing copy text
 * @returns {JSX} Markup for the main contact container
 */
const Contact = ({screenSize}) => {
    return (
        <div className="contact-section rainbow-shadow">
            <p className="specialty rainbow available">
                I am available for freelance opportunities.
            </p>
            <p>Do you have an exciting project and need help?</p>
            <p>Send me a message and <a href="mailto: jennysneal@gmail.com"><span className='rainbow'>let's chat.</span></a></p>
            { screenSize === screenSizes.SMALL && <SideNav />}
        </div>
    );
};

export default Contact;
