import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem';

import './styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: 'hats',
          imageUrl: 'https://bit.ly/38qemXP',
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: 'https://bit.ly/3wSaqZ3',
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: 'https://bit.ly/3NIThqj',
        },
        {
          id: 4,
          title: 'womens',
          imageUrl: 'https://bit.ly/3wSB4B4',
          size: 'large',
        },
        {
          id: 5,
          title: 'mens',
          imageUrl: 'https://bit.ly/3lQkETz',
          size: 'large',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
