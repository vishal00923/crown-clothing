import React from 'react';

import categories from '../../data/categories';
import Directory from '../../components/Directory/Directory';

import './styles.scss';

export default function Home() {
  return (
    <div className="home">
      <Directory categories={categories} />
    </div>
  );
}
