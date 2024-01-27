// libraries
import { useState } from 'react';

// utils
import { formatClassName } from '../utils/formatText';

// pages
import Contact from '../pages/Contact';

// components
import Skills from '../components/resume/Skills';
import Experience from '../components/resume/Experience';
import Certificates from '../components/resume/Certificates';
import Projects from '../components/resume/Projects';

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
        achievements: 'Achievements',
        projects: 'Personal Projects'
    };

    const [activeTab, setActiveTab] = useState(sections.experience);

    return (<div className="resume-section">
        <SectionNav 
            sections={sections} 
            activeTab={activeTab} 
            onSetActiveTab={setActiveTab} />
        <div className={`resume-section__sections ${formatClassName(activeTab)}`}>
            { activeTab === sections.skills && <Skills /> }
            { activeTab === sections.experience && <Experience /> }
            { activeTab === sections.achievements && <Certificates /> }
            { activeTab === sections.projects && <Projects /> }
        </div>
        <Contact />
    </div>)
};

export default Resume;
