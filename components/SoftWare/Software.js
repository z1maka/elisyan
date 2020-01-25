import React from 'react';
import '../../styles/software.scss';
import Button from '../utils/Button';
import SoftwareItem from './SoftwareItem';

const Software = () => {
  const [activeItem, setItem] = React.useState(null);
  const softwareItems = [
    { src: '/img/item_1.png', title: 'CUSTOM SOFTWARE DEVELOPMENT' },
    { src: '/img/item_2.png', title: 'TESTING & QUALITY ASSURANCE' },
    { src: '/img/item_3.png', title: 'MOBILE APPLICATIONS DEVELOPMENT' },
    { src: '/img/item_4.png', title: 'MAINTENANCE & SUPPORT' }
  ];

  const handleClick = id => setItem(id);

  const renderSoftItems = () => {
    return softwareItems.map((item, i) => (
      <SoftwareItem
        id={i}
        active={activeItem === i}
        onClick={handleClick}
        src={item.src}
        title={item.title}
      />
    ));
  };

  return (
    <div className="software">
      <div className="software-col1">{renderSoftItems()}</div>
      <div className="software-col2">
        <h2 className="title">Custom software development</h2>
        <p>
          Responsive front-end and back-end of any complexity, 3D modeling and
          graphic design, document workflow solution and e-commerce shop –
          Extrawest has considerable experience in delivering stellar software
          applications for every client. We are your full-stack team that you
          can rely on in building your idea from scratch
        </p>
        <Button
          text={'TALK TO AN EXPERT'}
          onClick={() => console.log('click')}
        />
      </div>
    </div>
  );
};

export default Software;
