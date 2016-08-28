import {shallow} from 'enzyme';
import React from 'react';

export default class BaseDriver {

  constructor(path, mocks) {
    this.path = path;
    this.mocks = mocks;
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
