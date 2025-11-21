import { StyleSheet } from 'react-native';

export const RecipeCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F7F5',
    margin: 10,
    borderRadius: 30,
  },
  img: {
    height: 120,
    width: 120,
  },
  TextContainer: {
    marginLeft: 20,
    flexDirection: 'column',
    rowGap: 20,
    flex: 1,
  },
  Name: {
    fontSize: 15,
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  Time: {
    fontSize: 15,
  },
});
