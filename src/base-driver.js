import {shallow} from 'enzyme';
import React from 'react';

export default class BaseDriver {


  constructor({path, mocks, isRelativePathFromRoot = true, rootFolder = 'src/'}) {
    this.mocks = mocks;
    this.rootFolder = rootFolder;
    this.path = isRelativePathFromRoot ? `../../../${this.rootFolder}${path}` : path;
  }

  render(props) {
    const Component = require('proxyquire').noCallThru()(this.path, {...this.mocks}).default;
    this.component = shallow(<Component {...props}/>);
  }

  getElementByTestId(testId) {
    console.warn('--- DEPRECATED --- getElementByTestId is deprecated. use byId instead'); // eslint-disable-line
    return this.byId(testId);
  }

  byId(testId) {
    const el = this.component.findWhere(node => node.prop('testID') === testId);
    return el;
  }
}
