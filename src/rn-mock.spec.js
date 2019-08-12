import {createMockReactComponent} from './rn-mock';
import React from 'react';

describe('createMockReactComponent', () => {

  beforeAll(() => {
    jasmine.addMatchers({
      toBeAReactComponent: () => ({
        compare: actual => {
          const element = React.createElement(actual);
          return {
            pass: element.type instanceof Function && element.hasOwnProperty('props')
          };
        }
      })
    })
  });

  it('should create dummy react components', () => {
    const uut = createMockReactComponent();
    expect(uut).toBeAReactComponent();
  });

  it('should create dummy react components inside an object', () => {
    const uut = createMockReactComponent('abc', 'def');
    expect(uut.abc).toBeAReactComponent();
    expect(uut.def).toBeAReactComponent();
  });
});
