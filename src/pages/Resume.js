// libraries
import { useState } from 'react';

// pages
import Contact from '../pages/Contact';

// components
import Skills from '../components/resume/Skills';
import Experience from '../components/resume/Experience';
import Certificates from '../components/resume/Certificates';

// elements
import SectionNav from '../elements/SectionNav';

/**
 * @function Resume
 * @description Functional component containing navigation items and corresponding components
 * @returns {JSX} Markup for the main resume container
 */
const Resume = () => {
    const sections = {
        experience: 'Experience',
        skills: 'Skills',
        achievements: 'Achievements'
    };

    const [activeTab, setActiveTab] = useState(sections.experience);

    return <div className="resume-section">
        <SectionNav 
            sections={sections} 
            activeTab={activeTab} 
            onSetActiveTab={setActiveTab} />
        <div className={`resume-section__sections ${activeTab}`}>
            { activeTab === sections.skills && <Skills /> }
            { activeTab === sections.experience && <Experience /> }
            { activeTab === sections.achievements && <Certificates /> }
        </div>
        <Contact />
    </div>
};

export default Resume;
