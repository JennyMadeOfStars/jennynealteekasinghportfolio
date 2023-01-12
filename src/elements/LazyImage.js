// libraries
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

/**
 * @function LazyImage
 * @description Functional component that lazy loads an image with fallback text or loading spinner
 * @returns {JSX} Markup for the LazyImage component
 */
const LazyImage = ({
    className,
    imgSrc,
    textName,
    alt = '',
    showLoader = false,
    displayNothing = false
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const imageLoadHandler = () => {
        setIsImageLoaded(true);
    };

    return (
        <>
            { !isImageLoaded && !displayNothing && !showLoader && textName }
            {
                !isImageLoaded && !displayNothing && showLoader && 
                <div className='center'>
                    <LoadingSpinner />
                </div>
            }
            <img style={isImageLoaded ? {} : { display: 'none' }}
                src={imgSrc} 
                className={className}
                alt={alt ? alt : textName}
                title={textName}
                onLoad={imageLoadHandler} />
        </>
    );
};

export default LazyImage;
