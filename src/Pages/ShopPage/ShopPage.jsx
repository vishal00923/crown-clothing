import React, { Component } from 'react';

import SHOP_DATA from './ShopData';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
