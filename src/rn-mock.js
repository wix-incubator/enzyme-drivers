import React from 'react';
import createReactClass from 'create-react-class';

export const createMockReactComponent = (...components) => components.length ?
  components.reduce((acc, c) => ({
    ...acc,
    [c]: createMockReactComponent()
  }), {}) :
  createReactClass({
    render() {
      return <div {...this.props}>{this.props.children}</div>
    }
  });
