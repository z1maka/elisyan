import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/img/logo.png" alt="Elisian" />
      </div>
      <div className="header-menu">
        <ul className="menu">
          <li className="menu-item active">Services</li>
          <li className="menu-item">Technologies</li>
          <li className="menu-item">Portfolio</li>
          <li className="menu-item">Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
