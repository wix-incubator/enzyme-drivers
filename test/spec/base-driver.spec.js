import BaseDriver from '../../src/base-driver';

describe('base driver test', () => {
  let driver;

  beforeEach(() => {
    driver = new MyDriver('../test/mocks/dummy-component', {}, false);
  });

  it('should render component', () => {
    driver.render({text: 'yoba'});

    expect(driver.text).toBe('It works!');
  });
});


class MyDriver extends BaseDriver {
  get text() {
    return this.getElementByTestId('myText').props().children;
  }
}
