import RNDriver from './rn-driver';

describe('rn driver test', () => {
  let driver;

  it('should render component', () => {
    driver = new MyDriver({
      component: require('../test/mocks/dummy-react-native-component').default,
    });

    driver.render({text: 'yoba'});

    expect(driver.text).toBe('It works!');
  });

  it('should support commonjs', () => {
    driver = new MyDriver({
      path:'../test/mocks/dummy-react-native-component-commonjs',
      isRelativePathFromRoot: false,
      commonjs: true
    })

    driver.render({text: 'yoba'});

    expect(driver.text).toBe('It works!');
  })

  describe('getStylesByTestId', () => {

    let driver;
    beforeEach(() => {
      driver = new MyDriver({
        component: require('../test/mocks/dummy-react-native-component').default,
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
