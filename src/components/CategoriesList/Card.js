import { Image, Text, View, Pressable } from 'react-native';
import { CategoriesStyle } from './CategoriesListStyle';

const Card = ({ img, text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={CategoriesStyle.Viewcard}>
        <Image style={CategoriesStyle.img} source={img} />
        <Text style={CategoriesStyle.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Card;
