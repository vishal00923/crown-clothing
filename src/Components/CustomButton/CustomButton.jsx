import React from 'react';

import './styles.scss';

export default function CustomButton({ children }) {
  return <button className="custom-button">{children}</button>;
}
