import React from 'react';
import './styles.css'

export default function StandardCss() {
  return (
    <div>
      <h2>Standard CSS</h2>
      <button className="button">Default</button>
      <button className="button">Primary</button>
      <button className="button secondary">Secondary</button>
      <button className="button success">Success</button>
    </div>
  );
}
