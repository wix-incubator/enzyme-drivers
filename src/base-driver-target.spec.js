import BaseDriver from './base-driver';

describe('base driver test using specified import target', () => {
  let driver;

  beforeEach(() => {
    driver = new MyDriver({
      path: '../test/mocks/dummy-class-component-no-default',
      targetImport: 'AnotherExportedComponent',
      isRelativePathFromRoot: false
    });
  });

  it('should render component', () => {
    driver.render({});
    expect(driver.text).toBe('Great Success');
    expect(driver.textValue).toBe('Great Success');
  });


});

describe('base driver test with CommonJS support', () => {
  it('should support CommonJS', () => {
    let driver = new MyDriver({
      path: '../test/mocks/dummy-class-component-commonjs',
      commonjs: true,
      isRelativePathFromRoot: false
    });
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
