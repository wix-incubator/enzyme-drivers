import React from 'react-native-mock';
import BaseDriver from './base-driver';

export default class RNDriver extends BaseDriver {

  constructor({path, mocks, isRelativePathFromRoot = true, rootFolder = 'src/'}) {
    super({path, mocks: {'react-native': React, ...mocks}, isRelativePathFromRoot, rootFolder});
  }
}
