// libraries
import React, { useState } from 'react';

// pages
import Contact from '../pages/Contact';

// components
import Services from '../components/about/Services';
import AboutMe from '../components/about/AboutMe';
import SelfImage from '../components/about/SelfImage';

// elements
import SectionNav from '../elements/SectionNav';

/**
 * @function About
 * @description Functional component containing navigation items and corresponding components
 * @returns {JSX} Markup for the main about container
 */
const About = () => {
    const sections = {
        about: 'About Me',
        service: 'What I Can Do'
    };

    const [activeTab, setActiveTab] = useState(sections.about);

    return <div className="about-section">
        <SectionNav 
            sections={sections} 
            activeTab={activeTab} 
            onSetActiveTab={setActiveTab} />
        <div className='about-section__sections' data-id={activeTab}>
            <div className="about-section__section about-section__section--about">
                <SelfImage />
                { activeTab === sections.service && <Services /> }
                { activeTab === sections.about && <AboutMe /> }
            </div>
        </div>
        <Contact />
    </div>
};

export default React.memo(About);