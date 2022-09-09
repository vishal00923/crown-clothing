import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { collections } from '../../utils/products_data';

export default function ShopPage() {
  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
}
