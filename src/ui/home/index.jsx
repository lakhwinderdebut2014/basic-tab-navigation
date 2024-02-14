import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addCounter} from '../../store/redux/slice/counterSlice';
import styles from './style';

const HomeScreen = ({navigation, route}) => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incDecCountHandler = newCounter => {
    dispatch(
      addCounter({
        count: newCounter,
      }),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={
          styles.counterText
        }>{`Counter Number on home - ${counter}`}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => {
            incDecCountHandler(counter + 1);
          }}>
          <Text style={styles.buttonStyle}>{' + '}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => {
            if (counter > 0) incDecCountHandler(counter - 1);
          }}>
          <Text style={styles.buttonStyle}>{' - '}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
