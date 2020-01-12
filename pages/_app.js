import React from 'react';
import App from 'next/app';
import Helmet from 'react-helmet';
import '../public/styles/home.scss';

class myApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Helmet htmlAttributes={{ lang: 'ru' }} title="Elysian Developers">
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#7a0711" />
          <meta name="msapplication-TitleColor" content="#FFFFFF" />
          <meta name="msapplication-TitleImage" content="/img/logo.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Elysian Developers" />
          <meta
            name="og:image"
            content="https://cdn2.atlanta.ua/site/images/logo.jpg"
          />
          <meta name="og:image:width" content="270" />
          <link rel="canonical" href="https://www.elysian-developers.com/" />
        </Helmet>
        <Component {...pageProps} />
      </>
    );
  }
}

export default myApp;
