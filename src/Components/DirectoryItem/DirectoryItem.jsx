import React from 'react';

import './styles.scss';

export default function DirectoryItem({ title, imageUrl, size }) {
  return (
    <div className={`menuItem ${size}`}>
      <div
        className="menuItem__BgImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="menuItem__Content">
        <h1 className="menuItem__Title">{title.toUpperCase()}</h1>
        <p className="menuItem__Subtitle">SHOP NOW</p>
      </div>
    </div>
  );
}
