import React, { Component } from 'react';
import Nav from './Nav';
import PageWrapper from './PageWrapper';

class Apps extends Component {
  render() {
    return (
      <div id="wrapper">
        <Nav />
        <PageWrapper />
      </div>
    );
  }
}

export default Apps;