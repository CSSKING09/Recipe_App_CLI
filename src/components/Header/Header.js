import { Image, Text, View } from 'react-native';
import HeaderStyle from './Headerstyle';

const Header = ({ title, icon }) => {
  return (
    <View style={HeaderStyle.header}>
      <Image style={HeaderStyle.icon} source={icon} />
      <Text style={HeaderStyle.text}>{title}</Text>
    </View>
  );
};

export default Header;
