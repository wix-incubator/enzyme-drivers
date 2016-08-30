import React from 'react-native-mock';
import BaseDriver from './base-driver';

export default class RNDriver extends BaseDriver {

  constructor({path, mocks, isRelativePathFromRoot = true, rootFolder = 'src/'}) {
    super({path, mocks: {'react-native': React, ...mocks}, isRelativePathFromRoot, rootFolder});
  }

  getStylesByTestId(testId) {
    let styles = this.getElementByTestId(testId).props().style;
    if (styles instanceof Array) {
      styles = styles.reduce((acc, obj) => ({...acc, ...obj}));
    }
    return styles;
  }
}
