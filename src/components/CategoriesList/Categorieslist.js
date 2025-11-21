import { View } from 'react-native';
import Card from './Card';
import { CategoriesStyle } from './CategoriesListStyle';
import { strings } from '../../strings/Strings';
import { icons } from '../../assets/Icons/icons';

const Categorieslist = ({ onCategoryPress }) => {
  return (
    <View style={CategoriesStyle.list}>
      <Card
        text={strings.Categories.soup}
        img={icons.hot_soup}
        onPress={() => onCategoryPress('soup')}
      />
      <Card
        text={strings.Categories.Salads}
        img={icons.salad}
        onPress={() => onCategoryPress('salad')}
      />
      <Card
        text={strings.Categories.Pasta}
        img={icons.pasta}
        onPress={() => onCategoryPress('pasta')}
      />
      <Card
        text={strings.Categories.Desserts}
        img={icons.sweets}
        onPress={() => onCategoryPress('dessert')}
      />
    </View>
  );
};

export default Categorieslist;
