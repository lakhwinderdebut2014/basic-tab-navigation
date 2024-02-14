import {NavigationContainer} from '@react-navigation/native';
import DashboardNavigator from './DashboardNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <DashboardNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
