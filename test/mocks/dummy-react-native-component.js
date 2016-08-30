import React, {View, Text, PropTypes} from 'react-native';

export default function DummyReactNativeComponent({text, style}) {
  return (
    <View>
      <Text testID="myText">It works!</Text>
      <Text testID="textFromProp">{text}</Text>
      <Text testID="textWithCustomStyle" style={style}>This should work too</Text>
    </View>
  );
}

DummyReactNativeComponent.propTypes = {
  text: PropTypes.string,
  style: PropTypes.any
};
