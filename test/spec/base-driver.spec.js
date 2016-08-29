import BaseDriver from '../../src/base-driver';

describe('base driver test', () => {
  let driver;

  it('should render component', () => {
    driver = new MyDriver({
      path: '../test/mocks/dummy-component',
      mocks: {},
      isRelativePathFromRoot: false
    });
    driver.render({text: 'yoba'});

    expect(driver.text).toBe('It works!');
  });
});

class MyDriver extends BaseDriver {
  get text() {
    return this.getElementByTestId('myText').props().children;
  }
}
