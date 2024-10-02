import { StyleSheet } from 'react-native';

const colors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  text: '#333333',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export { colors, globalStyles };