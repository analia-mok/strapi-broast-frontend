import { Component } from 'react';
import Head from 'next/head';

export default class DefaultLayout extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Hello World</title>
        </Head>
        <header>{this.props.children}</header>
      </>
    );
  }
}
