import { TouchableOpacity, Text } from 'react-native';
import ButtonStyles from './ButtonStyle';

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[ButtonStyles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[ButtonStyles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
