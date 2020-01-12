import React, { Component } from 'react';
import WithHeaderFooter from '../components/layouts/WithHeaderFooter';
import Preview from '../components/Preview';

class Index extends Component {
  render() {
    return (
      <WithHeaderFooter>
        <Preview />
      </WithHeaderFooter>
    );
  }
}

export default Index;
