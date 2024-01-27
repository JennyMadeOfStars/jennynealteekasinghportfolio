// elements
import Button from './Button';

/**
 * @function SectionNav
 * @description Functional component containing section nav element with lists
 * @returns {JSX} Markup for the section nav component
 */
const SectionNav = ({sections, activeTab, onSetActiveTab}) => {
    return (
        <ul className="section__nav">
            { Object.keys(sections).map(
                section => {
                    const clickHandler = () => {
                        onSetActiveTab(sections[section]);
                    };
                    return (
                        <li key={section} id={section}>
                            <Button 
                                onClick={clickHandler}
                                classes={`${activeTab === sections[section] ? 'active rainbow' : ''}`}
                                title={sections[section]} />
                        </li>
                )})
            }
        </ul>
    );
};

export default SectionNav;
