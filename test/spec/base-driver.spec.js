import BaseDriver from '../../src/base-driver';

describe('base driver test', () => {
  let driver;

  beforeEach(() => {
    driver = new MyDriver({
      path: '../test/mocks/dummy-component',
      mocks: {},
      isRelativePathFromRoot: false
    });
  });

  it('should render component', () => {
    driver.render({text: 'yoba'});
    expect(driver.text).toBe('It works!');
    expect(driver.textValue).toBe('It works!');
  });
});

class MyDriver extends BaseDriver {
  get text() {
    return this.byId('myText').props().children;
  }

  get textValue() {
    return this.childrenOf('myText');
  }
}
