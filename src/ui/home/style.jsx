import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
  },
  buttonView: {
    width: 60,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'red',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  counterText: {
    fontSize: 18,
    color: 'black',
  },
});

export default styles;
