import { Text, View } from 'react-native';
import { TitleStyle } from './TitleStyle';

const Title = ({ text }) => {
  return (
    <View style={TitleStyle.view}>
      <Text style={TitleStyle.text}>{text}</Text>
    </View>
  );
};

export default Title;
