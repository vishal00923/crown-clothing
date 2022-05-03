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
          imageUrl:
            'https://i.ibb.co/t4M0Xrf/photo-1525740615880-50bb88fe0b1f-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl:
            'https://i.ibb.co/vk9tfN4/photo-1611312449408-fcece27cdbb7-ixlib-rb-1-2-1-q-60-fm-jpg-crop-faces-edges-cs-tinysrgb-w-1200-fit.jpg',
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl:
            'https://i.ibb.co/25Wvfpz/photo-1600269452121-4f2416e55c28-ixlib-rb-1-2-1-q-60-fm-jpg-crop-faces-edges-cs-tinysrgb-w-1200-fit.jpg',
        },
        {
          id: 4,
          title: 'womens',
          imageUrl:
            'https://i.ibb.co/tDsBZxs/photo-1485043433441-db091a258e5a-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
          size: 'large',
        },
        {
          id: 5,
          title: 'mens',
          imageUrl:
            'https://i.ibb.co/4Yfk0MG/photo-1503443207922-dff7d543fd0e-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg',
          size: 'large',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
