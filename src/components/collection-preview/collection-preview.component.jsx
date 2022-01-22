import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    const filteredItem = items.filter((item, idx) => idx < 4);

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {filteredItem.map((item) => (
                    <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}>
                        {item.name}
                    </CollectionItem>
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
