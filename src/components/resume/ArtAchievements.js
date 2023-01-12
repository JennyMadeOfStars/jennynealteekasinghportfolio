// elements
import H2 from '../../elements/H2';

// data
import artExhibitions from '../../data/artExhibitions';

/**
 * @function ArtAchievements
 * @description Functional component containing data list
 * @returns {JSX} Markup for the art achievements component
 */
const ArtAchievements = () => {
    return <>
        <H2 title="Art Exhibitions" />
        <div className="achievement-list group-list content-section">
            <ul className='vertical'>
            { artExhibitions.map((exhibition, index) => 
                    <li key={`${exhibition}_${index}`}>
                        <p className='bold'>{exhibition.exhibitionName}</p>
                        <p>{exhibition.location}</p>
                        <p className='italic'>{exhibition.date}</p>
                    </li>
                )
                }
            </ul>
        </div>
    </>
};

export default ArtAchievements;
