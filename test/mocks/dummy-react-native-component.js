import React, {View, Text, PropTypes} from 'react-native';

export default function DummyReactNativeComponent({text}) {
  return (
    <View>
      <Text testID="myText" style={{fontSize: 12, backgroundColor: 'black'}}>It works!</Text>
      <Text testID="textFromProp">{text}</Text>
      <Text testID="textWithArrayStyle" style={[{fontSize: 12, backgroundColor: 'black'}, {fontSize: 13}]}>This should work too</Text>
    </View>
  );
}

DummyReactNativeComponent.propTypes = {
  text: PropTypes.string
};
