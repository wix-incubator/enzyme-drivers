import BaseDriver from '../../src/base-driver';

describe('base driver test using specified import target', () => {
  let driver;

  beforeEach(() => {
    driver = new MyDriver({
      path: '../test/mocks/dummy-class-component-no-default',
      targetImport: 'AnotherExportedComponent',
      mocks: {},
      isRelativePathFromRoot: false
    });
  });

  it('should render component', () => {
    driver.render({});
    expect(driver.text).toBe('Great Success');
    expect(driver.textValue).toBe('Great Success');
  });


});

class MyDriver extends BaseDriver {
  get text() {
    return this.byId('anotherText').props().children;
  }

  get textValue() {
    return this.childrenOf('anotherText');
  }
}
