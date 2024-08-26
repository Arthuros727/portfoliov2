import React from 'react';
import './Status.css';
import { FaDownload } from 'react-icons/fa';

const Status = () => {
  return (
    <div className="status-container">
      <div className="status-header">
        <p className="status-title">Objectif !</p>
      </div>
      <div className="status-content">
        <div className="status-left">
          <img src="target.png" className="status-image" alt="Target" />
          <a href="CV_Arthur-Guerin.pdf" className="footer-button" download>
            <FaDownload className="footer-icon" />
            Mon CV 
          </a>
        </div>
        <div className="status-text">
        Après avoir passé 2 ans à la WebAcademie, j'ai appris à développer et intégrer des solutions web, ainsi qu'à les déployer. Mes objectifs futurs seraient d'enrichir mes connaissances dans le développement (web ou non) et de pouvoir me diversifier.        </div>
      </div>
      <p id="Com">Commentaire ↓</p>
    </div>
  );
};

export default Status;
