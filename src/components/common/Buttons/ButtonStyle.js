import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6347', // Tomato color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%', // half width
    alignSelf: 'center', // center horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default ButtonStyles;
