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
  { title: "Slide 2", subtitle: "Sous-titre 2", imageUrl: "" },
  { title: "Slide 3", subtitle: "Sous-titre 3", imageUrl: "" },
  { title: "Slide 4", subtitle: "Sous-titre 4", imageUrl: "" },
  { title: "Slide 5", subtitle: "Sous-titre 5", imageUrl: "" }
];

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <a href={slideData[index].url} target='_blank'>
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
