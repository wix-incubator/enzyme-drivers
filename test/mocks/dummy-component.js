import React from 'react';
import PropTypes from 'prop-types';

export default function DummyComponent({text, style, childText}) {
  return (
    <div>
      <div testID="myText" style={style}>It works!</div>
      <div testID="textFromProp">{text}</div>
      <ChildComponent testID="child-component" childText={childText} />
    </div>
  );
}

const ChildComponent = ({childText}) => <div><span testID="child-component-text" >{childText}</span></div>;

DummyComponent.propTypes = {
  text: PropTypes.string,
  childText: PropTypes.string,
  style: PropTypes.object
};

ChildComponent.propTypes = {
  childText: PropTypes.string
};
