import { StyleSheet } from 'react-native';

export const CategoriesStyle = StyleSheet.create({
  Viewcard: {
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#F5F7F5',
    padding: 18,
    borderRadius: 15,
    gap: 5,
  },
  img: {
    height: 50,
    width: 50,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});
