// libraries
import { useState } from 'react';

// elements
import H2 from '../../elements/H2';
import Button from '../../elements/Button';

// data
import experience from '../../data/experience';

/**
 * @function Experience
 * @description Functional component containing data list
 * @returns {JSX} Markup for the experience component
 */
const Experience = () => {
    const [clientListActive, setClientListActive] = useState(false);
    const toggleClientListHandler = () => {
        setClientListActive(!clientListActive);
    };

    return (
        <div className='experience-section content-section'>
            <H2 title="Experience" />
            <ul className='experience-section__list'>
                {
                    experience.map((role, index) => 
                        <li key={`${role}_${index}`} className="experience-section__list-item">
                            <dl>
                                <dt>{role.startingDate} - {role.endingDate}</dt>
                                <dd>
                                    <h3>{role.companyName}</h3>
                                    <p className='italic'>{role.jobTitle}</p>
                                    <p>{role.description}</p>
                                    <p className="text">
                                        <span className='bold'>Technologies:</span>
                                        <br />
                                        { role.techs &&
                                            role.techs.map((tech, index) => 
                                                <span key={index}>- {tech} </span>
                                        )}
                                    </p>
                                    { role.contributingClientList &&
                                        <>
                                            <ul className={clientListActive ? 'active' : ''}>
                                                { role.contributingClientList &&
                                                    role.contributingClientList.map((list, index) => 
                                                        <li key={index}>{list}</li>
                                                )}
                                            </ul>
                                            <Button 
                                                onClick={toggleClientListHandler}
                                                classes="rainbow"
                                                title={`${clientListActive ? 'Hide' : 'Show'} Client List`} />
                                        </>
                                    }
                                </dd>
                            </dl>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default Experience;
