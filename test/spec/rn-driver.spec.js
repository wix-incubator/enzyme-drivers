import RNDriver from '../../src/rn-driver';

describe('base driver test', () => {
  let driver;

  beforeEach(() => {
    driver = new MyDriver({
      path: '../test/mocks/dummy-react-native-component',
      mocks: {},
      isRelativePathFromRoot: false
    });
  });

  it('should render component', () => {
    driver.render({text: 'yoba'});

    expect(driver.text).toBe('It works!');
  });

  it('should expose getStylesByTestId', () => {
    driver = new MyDriver({
      path: '../test/mocks/dummy-react-native-component',
      mocks: {},
      isRelativePathFromRoot: false
    });
    driver.render({text: 'yoba'});

    expect(driver.myTextStyles).toEqual({
      fontSize: 12,
      backgroundColor: 'black'
    });

    expect(driver.arrayStyles).toEqual({
      fontSize: 13,
      backgroundColor: 'black'
    });
  });
});


class MyDriver extends RNDriver {
  get text() {
    return this.getElementByTestId('myText').props().children;
  }

  get myTextStyles() {
    return this.getStylesByTestId('myText');
  }

  get arrayStyles() {
    return this.getStylesByTestId('textWithArrayStyle');
  }
}
