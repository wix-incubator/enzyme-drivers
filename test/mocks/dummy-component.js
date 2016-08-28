import React, {PropTypes} from 'react';

export default function DummyComponent({text}) {
  return (
    <div>
      <div testID="myText">It works!</div>
      <div testID="textFromProp">{text}</div>
    </div>
  );
}

DummyComponent.propTypes = {
  text: PropTypes.string
};
