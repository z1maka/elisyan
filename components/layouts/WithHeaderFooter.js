import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const MyComponent = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="app-content">{children}</div>
      <Footer />
    </div>
  );
};

export default MyComponent;
