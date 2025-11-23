import { TextInput, View } from 'react-native';
import { SearchBarStyle } from './SearchBarStyle';
import { strings } from '../../../strings/Strings';

const SearchBar = ({ value, onChangeText, onFocus }) => {
  return (
    <View style={SearchBarStyle.view}>
      <TextInput
        style={SearchBarStyle.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={strings.searchBar}
        placeholderTextColor="#999"
        onFocus={onFocus}
      />
    </View>
  );
};

export default SearchBar;
