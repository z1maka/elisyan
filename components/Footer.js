import React from 'react';

const Header = () => {
  return (
    <footer>
      <div className="footer-menu">
        <ul className="menu">
          <li className="menu-item">Services</li>
          <li className="menu-item">Technologies</li>
          <li className="menu-item">Portfolio</li>
          <li className="menu-item">Contact us</li>
        </ul>
      </div>
      <div className="social">
        <div className="icon-block">
          <div className="facebook">
            <img src="/img/facebook.png" alt="Facebook" />
          </div>
          <div className="instagram">
            <img src="/img/instagram.png" alt="Facebook" />
          </div>
        </div>
      </div>
      <div className="footer-description">
        <p className="description">
          Elysian Development is a multi-talented, highly experienced digital
          agency offering professional web and mobile development services. Our
          skills and technologies knowledge, gained through the previous
          projects, let us provide top-notch results for our client's business
          ideas and deliver ready-to-use products.
        </p>
      </div>
      <div className="signature">
        <span>© Copyright 2019</span>
      </div>
    </footer>
  );
};

export default Header;
