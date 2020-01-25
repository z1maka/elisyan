import React from 'react';

const MyComponent = ({ src, title, active, onClick, id }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`software-item${active ? ' selected' : ''}`}
    >
      <img src={src} alt={title} title={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MyComponent;
