import React from 'react';
import './FooterPage.css';
import { FaDownload } from 'react-icons/fa'; // Assurez-vous d'avoir installé react-icons

const FooterPage = () => {
  return (
    <div className="footer-container">
      <a href="/path/to/your/resume.pdf" className="footer-button" download>
        <FaDownload className="footer-icon" />
        Télécharger CV
      </a>
      
    </div>
  );
};

export default FooterPage;
