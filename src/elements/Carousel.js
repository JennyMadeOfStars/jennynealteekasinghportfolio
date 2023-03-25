import { useEffect, useRef } from 'react';
import { throttle } from '../utils/utility';

/**
 * @function Carousel
 * @description The markup and functionality for carousel component
 * @returns {JSX} The carousel component
 */
const Carousel = (data) => {
    const totalSlidesElm = useRef(null);
    const currentSlideElm = useRef(null);
    const wrapper = useRef(null);
    const slides = useRef([]);  
    const leftArrow = useRef(null);
    const rightArrow = useRef(null);
    const carouselData = data.data;

    const onScreenResize = () => {
        setInitialPosition();
        setActiveSlideValue();
        updateArrows();
    };
      
    const getActiveSlideNumber = () => { 
        const activeSlide = (Math.abs(getScrollPosition()) / slides.current[0].offsetWidth) + 1;
        return activeSlide;
    };

    const setActiveSlideValue = () => {
        currentSlideElm.current.innerText = getActiveSlideNumber();
    };

    const getScrollPosition = () => {
        return Number(slides.current[0].style.transform.replace(/[^-?\d+$]/g, ''));
    };
    
    const setInitialPosition = () => {
        const itemWidth = slides.current[0].offsetWidth;
        slides.current.forEach(item => {
            item.style.transform = `translateX(${itemWidth * 0}px)`;
        });
    };
      
    const onScrollContainer = () => {
        getScrollPosition();
        updateArrows();
        setActiveSlideValue();
    };
      
    const updateArrows = () => {
        const translatePosition = getScrollPosition();
        if (translatePosition === 0) {
            disableArrow(leftArrow.current);
            enableArrow(rightArrow.current);
        } else if ((slides.current.length - 1) * slides.current[0].offsetWidth * -1 === translatePosition) {
            disableArrow(rightArrow.current);
            enableArrow(leftArrow.current);
        } else {
            enableArrow(leftArrow.current);
            enableArrow(rightArrow.current);
        }
    };
      
    const disableArrow = (elm) => {
        elm.classList.add('disabled');
    };
    
    const enableArrow = (elm) => {
        elm.classList.remove('disabled');
    };
      
    const scrollSlide = (direction) => {
        const widthOfSlide = slides.current[0].offsetWidth;
        const translatePosition = getScrollPosition();

        slides.current.forEach(item => {
            if (direction === 'left') {
                item.style.transform = `translateX(${translatePosition + widthOfSlide}px)`;
            } else {
                item.style.transform = `translateX(${translatePosition - widthOfSlide}px)`;
            }
        });
        updateArrows();
    };
      
    const onLeftArrowClick = () => {
        if (!leftArrow.current.classList.contains('disabled')) {
            scrollSlide('left');
            onScrollContainer();
        }
    };
    
    const onRightArrowClick = () => {
        if (!rightArrow.current.classList.contains('disabled')) {
            scrollSlide('right');
            onScrollContainer();  
        }
    };
    
    // const clearItemPositions = () => {
    //     slides.current.forEach(item => {
    //         item.style = '';
    //     });
    // };
    
    const attachEvents = () => {
        window.addEventListener('resize', onScreenResize);
        slides.current.forEach(slide => slide.addEventListener('keyup', onKeyboardEvents));
    };

    const onKeyboardEvents = (event) => {
        const totalSlides = slides.current.length;
        if (event.shiftKey && event.keyCode === 9 && event.srcElement !== slides.current[totalSlides - 1]) {
            onRightArrowClick();
        } else if (event.keyCode === 9 && event.srcElement !== slides.current[0]) {
            onLeftArrowClick();
        }
      };

    useEffect(() => {
        attachEvents();
        setInitialPosition();
        updateArrows();
        setActiveSlideValue();
        const totalSlides = slides.current.length;
        totalSlidesElm.current.innerText = totalSlides;
        
    });

    // const images = [
    //     "/assets/images/jenny-neal-teekasingh.jpg",
    //     "/assets/images/jenny-neal-teekasingh.jpg"
    // ];

    return (
        <div className="carousel" id="carousel">
          <div className="carousel__wrapper" ref={wrapper} onScroll={throttle(onScrollContainer, 5)}>
            {carouselData.map((item, index) => (
                <div id={`slide-${index}`} className="carousel__slide" tabIndex="0" key={index} ref={(element) => {slides.current[index] = element}}>
                    <div className="carousel__content">
                        <img src={item.image} alt="hello" />
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
          </div>
          
          <div className="carousel__arrows">
            <button className="carousel__arrow leftArrow" title="View previous image" ref={leftArrow} onClick={onLeftArrowClick}>
              <span className="icon-arrow-left">&lt;</span>
            </button>
            <div className="carousel__indicator">
                <span className="currentSlide" ref={currentSlideElm}></span> of <span className="totalSlides" ref={totalSlidesElm}></span>
            </div>
            <button className="carousel__arrow rightArrow" title="View next image" ref={rightArrow} onClick={onRightArrowClick}>
              <span className="icon-arrow-right">&gt;</span>
            </button>
          </div>
        </div>
    );
};

export default Carousel;
