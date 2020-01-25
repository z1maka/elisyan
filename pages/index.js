import React, { Component } from 'react';
import WithHeaderFooter from '../components/layouts/WithHeaderFooter';
import Preview from '../components/Preview';
import Software from '../components/SoftWare/Software';

class Index extends Component {
  render() {
    return (
      <WithHeaderFooter>
        <Preview />
        <Software />
      </WithHeaderFooter>
    );
  }
}

export default Index;
