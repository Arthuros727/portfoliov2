import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';
import './Project.css';

const slides = [
  {
    id: 1,
    title: 'Titre du projet 1',
    description: 'Description du projet 1',
    img: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/Arthuros727',
  },
  {
    id: 2,
    title: 'Titre du projet 2',
    description: 'Description du projet 2',
    img: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/Arthuros727',
  },
  // Ajoutez d'autres slides ici si nécessaire
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;

  const bind = useGesture({
    onWheel: ({ direction: [, y], memo = index }) => {
      const newIndex = memo + (y > 0 ? 1 : -1);
      setIndex(Math.max(0, Math.min(newIndex, totalSlides - 1)));
      return newIndex;
    },
  });

  const { y } = useSpring({
    y: -index * 100 + 'vh',
  });

  return (
    <div className="projects-carousel" {...bind()}>
      <animated.div style={{ transform: y.to((y) => `translateY(${y})`) }} className="slides">
        {slides.map((slide) => (
          <div key={slide.id} className="carousel__slide">
            <div className="project-card">
              <div className="project-image">
                <img src={slide.img} alt={`Projet ${slide.id}`} />
                <a href={slide.github} className="github-button">
                  <img src="githubo.png" alt="GitHub" />
                  voir
                </a>
              </div>
              <div className="project-description">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Projects;
