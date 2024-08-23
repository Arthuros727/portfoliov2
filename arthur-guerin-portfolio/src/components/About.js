import React from 'react';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './About.css';

const About = () => {
    const [isHovered, setIsHovered] = useState(false);
  const titleSpring = useSpring({ from: { opacity: 0, transform: 'translateY(-20px)' }, to: { opacity: 1, transform: 'translateY(0px)' }, delay: 200 });
  const contentSpring = useSpring({ from: { opacity: 0, transform: 'translateY(-20px)' }, to: { opacity: 1, transform: 'translateY(0px)' }, delay: 400 });
  const noteSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: isHovered ? 1 : 0.5, transform: 'translateY(0px)' },
    delay: isHovered ? 0 : 600,
    config: { duration: 300 }
  });
  return (
    <div className="section about">
      <animated.p style={titleSpring} id="titleabout">À propos de moi</animated.p>
      <animated.div style={contentSpring} className="content-wrapper">
        <img id="about-img" src="ht.png" className="about-image" alt="About" />
        <p id="about-text">Arthur Guerin, jeune développeur web full stack, diplômé de la Web@cadémie d'Epitech et est actuellement en master 1 Pre-MSc (Epitech). J'aime créer des choses, et résoudre des problèmes avec le code !</p>
      </animated.div>
      <animated.p
        style={noteSpring}
        id="projects-note"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Quelques projets ↓
      </animated.p> 
    </div>
  );
};

export default About;
