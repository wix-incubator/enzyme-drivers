import React, {PropTypes} from 'react';

export default function DummyComponent({text, style}) {
  return (
    <div>
      <div testID="myText" style={style}>It works!</div>
      <div testID="textFromProp">{text}</div>
    </div>
  );
}

DummyComponent.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
};
