import {shallow} from 'enzyme';
import React from 'react';

export default class BaseDriver {


  constructor({path, mocks, isRelativePathFromRoot = true, rootFolder = 'src/', targetImport = 'default', commonjs}) {
    this.mocks = mocks;
    this.rootFolder = rootFolder;
    this.targetImport = targetImport;
    this.path = isRelativePathFromRoot ? `../../../${this.rootFolder}${path}` : path;
    this.commonjs = commonjs;
  }

  render(props) {
    const ComponentModule = require('proxyquire').noCallThru()(this.path, {...this.mocks});
    const Component = this.commonjs ? ComponentModule : ComponentModule[this.targetImport];
    this.component = shallow(<Component {...props}/>);
  }

  getElementByTestId(testId) {
    console.warn('--- DEPRECATED --- getElementByTestId is deprecated. use byId instead'); // eslint-disable-line
    return this.byId(testId);
  }

  propsOf(testId) {
    return this.byId(testId).props();
  }

  childrenOf(testId) {
    return this.propsOf(testId).children;
  }

  byId(testId) {
    const el = this.component.findWhere(node => node.prop('testID') === testId);
    return el;
  }

  get state() {
    return this.component.state();
  }

  setState(state) {
    this.component.setState(state);
  }

}
