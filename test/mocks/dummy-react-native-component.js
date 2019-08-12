import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function DummyReactNativeComponent({text, style, onTap}) {
  return (
    <View>
      <Text testID="myText" onPress={onTap}>It works!</Text>
      <Text testID="textFromProp">{text}</Text>
      <Text testID="textWithCustomStyle" style={style}>This should work too</Text>
    </View>
  );
}

DummyReactNativeComponent.propTypes = {
  text: PropTypes.string,
  style: PropTypes.any,
  onTap: PropTypes.func
};
