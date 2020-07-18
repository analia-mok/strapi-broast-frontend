import { Component } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
// Will need later.
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

export default class HomePage extends Component {
  render() {
    return (
      <>
        <DefaultLayout>
          <h1 className="font-bold text-5xl">Some Home Page Title</h1>
        </DefaultLayout>
      </>
    );
  }
}
