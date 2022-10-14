import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

export default function DirectoryItem({ category }) {
  const { title, imageUrl, size, route } = category;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <div onClick={handleNavigation} className={`directoryItem ${size}`}>
      <div
        className="directoryItem__bgImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directoryItem__contents">
        <h1 className="directoryItem__title">{title.toUpperCase()}</h1>
        <p className="directoryItem__subtitle">SHOP NOW</p>
      </div>
    </div>
  );
}
