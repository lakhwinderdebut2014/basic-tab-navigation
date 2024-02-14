import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';

const NotificationScreen = ({navigation, route}) => {
  const counter = useSelector(state => state.counter);

  return (
    <View style={styles.mainContainer}>
      <Text
        style={
          styles.counterText
        }>{`Counter Number on notification - ${counter}`}</Text>
    </View>
  );
};

export default NotificationScreen;
