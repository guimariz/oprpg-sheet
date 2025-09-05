// src/components/common/Section.js
import React from 'react';

const Section = ({ title, className, children }) => (
  <div className={`${className} section-box`}>
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

export default Section;