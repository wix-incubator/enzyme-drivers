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

  describe('getStylesByTestId', () => {

    let driver;
    beforeEach(() => {
      driver = new MyDriver({
        path: '../test/mocks/dummy-react-native-component',
        mocks: {},
        isRelativePathFromRoot: false
      });
    });

    it('should support simple styles', () => {
      driver.render({style: {
        fontSize: 12,
        backgroundColor: 'black'
      }});

      expect(driver.customStyles).toEqual({
        fontSize: 12,
        backgroundColor: 'black'
      });
    });

    it('should support style arrays', () => {
      driver.render({style: [
        {
          fontSize: 12,
          backgroundColor: 'black'
        },
        {
          fontSize: 13
        },
        false && {
          irrelevant: 'false does not get included'
        },
        true && {
          height: 15
        }
      ]
      });

      expect(driver.customStyles).toEqual({
        fontSize: 13,
        height: 15,
        backgroundColor: 'black'
      });
    });

    it('should tapOn', () => {
      const tapSpy = jasmine.createSpy('tap');
      driver.render({text: 'yoba', onTap: tapSpy});
      driver.tap();
      expect(tapSpy).toHaveBeenCalled();
    });

  });
});


class MyDriver extends RNDriver {
  get text() {
    return this.byId('myText').props().children;
  }

  tap() {
    this.tapOn('myText');
  }

  get customStyles() {
    return this.stylesById('textWithCustomStyle');
  }
}
