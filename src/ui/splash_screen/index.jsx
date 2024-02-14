import React from 'react';
import {Image, View} from 'react-native';
import styles from './style';

const SplashScreen = ({navigation, route}) => {
  React.useEffect(() => {
    checkUserFlow();
  }, []);

  //handles user flow -> if a user is logged in then it will navigate to dashboard and if user is not logged in, it will navigate to login screen.
  const checkUserFlow = async () => {
    const timeOut = setTimeout(() => {
      //navigates to login screen
      navigation.reset({
        index: 0,
        routes: [{name: 'DashBoardScreen'}],
      });
    }, 1000);

    // clear time out as soon as user is redirected to next screen.
    return () => {
      clearTimeout(timeOut);
    };
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/splash_screen.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default SplashScreen;
