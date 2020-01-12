import React from 'react';
import Button from './utils/Button';

const Preview = () => {
  const handleClick = () => {
    console.log('press');
  };

  return (
    <div className="preview">
      <div className="preview-content">
        <h1 className="preview-content-name">ELYSIAN DEVELOPMENT</h1>
        <p className="preview-content-description">
          Meet your expectations with the team of professionals in web
          development area
        </p>
        <Button text="Get started" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Preview;
