import React from 'react';

import './styles.scss';

export default function Button({
  type,
  styles,
  children,
  isLoading,
  handleClick,
}) {
  return (
    <button
      style={styles}
      disabled={isLoading}
      onClick={handleClick}
      className={`button ${type}`}
    >
      {isLoading ? <div className='spinner' /> : children}
    </button>
  );
}
