// components
import ArtAchievements from './ArtAchievements';

// elements
import H2 from '../../elements/H2';

// data
import certifications from '../../data/certifications';

/**
 * @function Certificates
 * @description Functional component containing data list
 * @returns {JSX} Markup for the certificates component
 */
const Certificates = () => {
    return <>
        <H2 title="Certificates" />
        <div className="certificate-list content-section group-list">
            <ul className='vertical'>
                { certifications.map((cert, index) => 
                    <li key={`${cert}_${index}`}>
                        <p className='bold'>{cert.certName}</p>
                        <p className='italic'>{cert.date}</p>
                        <p>
                            <a href={cert.companyURL}>
                                {cert.issuer}
                            </a>
                        </p>
                    </li>
                )}
            </ul>
        </div>
        <ArtAchievements />
    </>;
};

export default Certificates;
