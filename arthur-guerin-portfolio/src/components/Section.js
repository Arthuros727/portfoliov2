import React from 'react';
import '../index.css';

const Section = ({ children, id }) => (
  <div className={`section ${id}`}>
    {children}
  </div>
);

export default Section;
