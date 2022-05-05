import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './styles.scss';

const CollectionPreview = ({ title, items }) => {
  const filteredItems = items.filter((item, idx) => idx < 4);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {filteredItems.map(({ id, name, price, imageUrl }) => (
          <CollectionItem
            key={id}
            name={name}
            price={price}
            imageUrl={imageUrl}
          >
            {name}
          </CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
