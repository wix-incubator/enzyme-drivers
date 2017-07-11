const React = require('react');
const Component = React.Component;

class AnotherExportedComponent extends Component {
  render() {
    return (<div testID="anotherText">{'Great Success'}</div>);
  }
}

module.exports = AnotherExportedComponent;
