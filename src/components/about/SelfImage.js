// elements
import LazyImage from '../../elements/LazyImage';

/**
 * @function SelfImage
 * @description Functional component containing image tag
 * @returns {JSX} Markup for the self image component
 */
const SelfImage = () => {
    const description = 'Photograph of Jenny Neal-Teekasingh on her birthday 2022.';
    return (
        <div className="about-section__section-image-wrapper">
            <LazyImage 
                imgSrc='/assets/images/jenny-neal-teekasingh.jpg'
                textName={description}
                showLoader={true}
                className="about-section__section-image rainbow-shadow"
            />
        </div>
    )
};

export default SelfImage;
