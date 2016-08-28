import React, {View, Text, PropTypes} from 'react-native';

export default function DummyReactNativeComponent({text}) {
  return (
    <View>
      <Text testID="myText">It works!</Text>
      <Text testID="textFromProp">{text}</Text>
    </View>
  );
}

DummyReactNativeComponent.propTypes = {
  text: PropTypes.string
};
