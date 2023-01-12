// elements
import H2 from '../../elements/H2';

// data
import programmingSkills from '../../data/programming-skills';
import inProgressSkills from '../../data/inProgressSkills';
import softSkills from '../../data/soft-skills';
import computerArtSkills from '../../data/computerArtSkills';
import artSkills from '../../data/artSkills';
import additionalSkills from '../../data/additionalSkills';
import LazyImage from '../../elements/LazyImage';

/**
 * @function Skills
 * @description Functional component containing data list
 * @returns {JSX} Markup for the skills component
 */
const Skills = () => {
    const listSkillIcon = (skillset, title) => {
        return (
            <>
                <H2 title={title} />
                <div className="group-list">
                    <ul>
                        { skillset.map((skill, index) => 
                                <li key={`${skill}_${index}`}>
                                    <a href={skill.companyURL}
                                        className="icon"
                                        target="_new">
                                        <LazyImage 
                                            imgSrc={skill.logo}
                                            textName={skill.name}
                                            alt={`${skill.name} logo`}
                                        />
                                    </a>
                                </li>
                            )}
                    </ul>
                </div>
            </>
        );
    };

    const listSkill = (skillset, title) => {
        return (
            <>
                <H2 title={title} />
                <div className="group-list">
                    <ul className="text">
                        { skillset.map((skill, index) => (
                            <li key={`${skill}_${index}`}>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    return <div className="tech content-section">
        { listSkillIcon(programmingSkills, 'Technologies I Use') }
        { listSkillIcon(inProgressSkills, 'In Progress Skills') }
        { listSkillIcon(softSkills, 'Other Skills') }
        { listSkill(additionalSkills, 'Additional Skills') }
        { listSkill(computerArtSkills, 'Computer Art Skills') }
        { listSkill(artSkills, 'Fine Art Skills') }
    </div>;
};

export default Skills;
