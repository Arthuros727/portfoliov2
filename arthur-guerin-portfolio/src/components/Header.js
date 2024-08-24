import React from 'react';
import './Header.css';
// import mail from '/mail.png'
// import github from '/githubo.png'

const Header = () => {
    return (
      <header className="header">
        <div className="left-section">
          <h1>Arthur Guerin</h1>
        </div>
        <div className="right-section">
          <a href="mailto:arthur.guerin@epitech.eu">
            <img src='mail.png' alt="Mail" />
          </a>
          <div className="divider"></div>
          <a href="https://github.com/Arthuros727" target="_blank" rel="noopener noreferrer">
            <img src="githubo.png" alt="GitHub" />
          </a>
        </div>
      </header>
    );
  };
export default Header;
