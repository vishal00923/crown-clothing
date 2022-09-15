import React from 'react';

import './styles.scss';

export default function CustomButton({ children, type }) {
  return <button className={`custom-button ${type}`}>{children}</button>;
}
