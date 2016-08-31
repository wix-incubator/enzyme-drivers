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

  it('should get props', () => {
    driver.render({text: 'yoba', style: {color: 'red'}});
    expect(driver.textProps.style).toEqual({color: 'red'});
  });
});

class MyDriver extends BaseDriver {
  get text() {
    return this.byId('myText').props().children;
  }

  get textValue() {
    return this.childrenOf('myText');
  }

  get textProps() {
    return this.propsOf('myText');
  }
}
