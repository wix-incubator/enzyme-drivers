import RNMock from 'react-native-mock';
import React from 'react';

export const createMockReactComponent = (...components) => components.length ?
  components.reduce((acc, c) => ({
    ...acc,
    [c]: createMockReactComponent()
  }), {}) :
  RNMock.createClass({
    render() {
      return <div {...this.props}>{this.props.children}</div>;
    }
  });
