import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

// Données des slides
const slideData = [
  { title: "Puissance 4", subtitle: "Sous-titre 1", imageUrl: "p4.png",url: "https://github.com/Arthuros727/Puissance4"},
  { title: "Spotify", subtitle: "copie de spotify, react/docker, api externe", imageUrl: "flopify.png", url: "https://github.com/Arthuros727/Flopify" },
  { title: "Application Mobile", subtitle: "Application mobile en ReactNative, qui utilise micro, Accelerometre, barrometre + api", imageUrl: "mobile.jpg", url: "https://github.com/EpitechWebAcademiePromo2024/W-WEB-320-PAR-4-2-app-arthur.guerin" },
  { title: "Bot Discord", subtitle: "Bot discord en discordJS, api call", imageUrl: "appmaster.png", url: "https://github.com/Arthuros727/ApexBot" },
  
];

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla" id='embla'>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <a href={slideData[index].url} target='_blank' rel="noreferrer">
              <div
                className="embla__slide__background"
                style={{ backgroundImage: `url(${slideData[index].imageUrl})` }}
              ></div>

              <div className="embla__slide__content">
                <div className="embla__slide__text">
                  <h2 className="embla__slide__title">{slideData[index].title}</h2>
                  <p className="embla__slide__subtitle">{slideData[index].subtitle}</p>
                </div>
                <div className="embla__slide__message">
        Aller voir sur GitHub
      </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
