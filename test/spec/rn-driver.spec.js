import RNDriver from '../../src/rn-driver';

describe('base driver test', () => {
  let driver;

  beforeEach(() => {
    driver = new MyDriver('../test/mocks/dummy-react-native-component', {}, false);
  });

  it('should render component', () => {
    driver.render({text: 'yoba'});

    expect(driver.text).toBe('It works!');
  });
});


class MyDriver extends RNDriver {
  get text() {
    return this.getElementByTestId('myText').props().children;
  }
}
