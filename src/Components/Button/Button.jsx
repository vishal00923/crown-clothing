import React from 'react';

import './styles.scss';

export default function Button({ children, type, handleClick }) {
  return (
    <button onClick={handleClick} className={`button ${type}`}>
      {children}
    </button>
  );
}
