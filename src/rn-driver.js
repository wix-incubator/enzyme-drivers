import React from 'react-native-mock';
import BaseDriver from './base-driver';

export default class RNDriver extends BaseDriver {

  constructor(path, mocks) {
    super(path, {'react-native': React, ...mocks});
  }
}
