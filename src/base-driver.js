import {shallow} from 'enzyme';
import React from 'react';

export default class BaseDriver {

  constructor(path, mocks, isRelativePathFromSrc = true) {
    this.mocks = mocks;
    this.path = isRelativePathFromSrc ? `../../../src/${path}` : path;
  }

  render(props) {
    const Component = require('proxyquire').noCallThru()(this.path, {...this.mocks}).default;
    this.component = shallow(<Component {...props}/>);
  }

  getElementByTestId(testId) {
    const el = this.component.findWhere(node => node.prop('testID') === testId);
    return el;
  }
}
