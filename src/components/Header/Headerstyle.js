import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  icon: {
    height: 80,
    width: 80,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default HeaderStyle;
