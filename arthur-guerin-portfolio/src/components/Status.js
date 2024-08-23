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
          <a href="/path/to/your/resume.pdf" className="footer-button" download>
            <FaDownload className="footer-icon" />
            Mon CV 
          </a>
        </div>
        <div className="status-text">
          Arthur Guerin, jeune développeur web full stack, diplômé de la Web@cadémie d'Epitech et est actuellement en master 1 Pre-MSc (Epitech). J'aime créer des choses, et résoudre des problèmes avec le code !
        </div>
      </div>
      <p id="Com">Commentaire ↓</p>
    </div>
  );
};

export default Status;
