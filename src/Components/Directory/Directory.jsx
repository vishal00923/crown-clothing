import React from 'react';

import DirectoryItem from '../DirectoryItem/DirectoryItem';

import './styles.scss';

export default function Directory({ categories }) {
  return (
    <div className="directory">
      {categories.map(({ id, title, imageUrl, size }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}
