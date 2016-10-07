import React, {Component} from 'react';

export default class DummyClassComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div testID="myText">{this.state.theStateIs}</div>);
  }
}
