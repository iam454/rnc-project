
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import One from './screens/one';
import Two from './screens/two';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={One} />
        <Tab.Screen name="Settings" component={Two} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 export default Tabs;