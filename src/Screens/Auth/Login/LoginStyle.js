import { StyleSheet } from 'react-native';

const StyleLogin = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#f7f7ff',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2A2A72',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    color: 'black',
  },

  button: {
    backgroundColor: '#4c669f',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  switchText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#444',
  },

  switchTextHighlight: {
    fontWeight: '700',
    color: '#4c669f',
  },
});
export default StyleLogin;
