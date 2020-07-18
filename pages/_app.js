import React from 'react';
import App from 'next/app';
import '../css/main.css';
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
