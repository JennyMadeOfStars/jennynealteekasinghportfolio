/**
 * @function AboutMe
 * @description Functional component containing text copy paragraphs and heading
 * @returns {JSX} Markup for the about me component
 */
const AboutMe = ({children}) => {
    return (
        <div className="about-section__section about-section__section--about">
            <div className="about-section__section-content">
                {children}
                <h1 className='specialty rainbow intro'>
                    Hi, I'm Jenny.<br/>A Front-end Developer.
                </h1>
                <p className='about-section__section-content--callout'>
                    I have over 10+ years of development experience, building and contributing to Websites and Web Applications that have led to great success.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
