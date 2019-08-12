import BaseDriver from './base-driver';

export default class RNDriver extends BaseDriver {

  constructor({mocks, isRelativePathFromRoot = true, rootFolder = 'src/', ...props}) {
    super({isRelativePathFromRoot, mocks, rootFolder, ...props});
  }

  getStylesByTestId(testId) {
    console.warn('--- DEPRECATED --- getStylesByTestId is deprecated. use stylesById instead'); // eslint-disable-line
    return this.stylesById(testId);
  }

  tapOn(testId) {
    this.byId(testId).simulate('press');
  }

  stylesById(testId) {
    let styles = this.byId(testId).props().style;
    if (styles instanceof Array) {
      styles = styles.reduce((acc, obj) => ({...acc, ...obj}));
    }
    return styles;
  }
}
