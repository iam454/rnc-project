import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
import MusicScreen from "./MusicScreen";


import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const API_KEY = "223bbc26d2844113d819cabfeff1a06e";


export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp, temp_max, temp_min },
        weather,
        name,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      temp_max,
      temp_min,
      name,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, name, temp, temp_max, temp_min, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Music') {
              iconName = focused
                ? 'musical-notes'
                : 'musical-notes-outline'
            } else if (route.name === 'Weather') {
              iconName = focused ? "cloud" : "cloud-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'skyblue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Music" component={MusicScreen} />
        <Tab.Screen name="Weather" component={
          // Weather
          <Weather
        name={name}
        temp={Math.round(temp)}
        temp_max={Math.round(temp_max)}
        temp_min={Math.round(temp_min)}
        condition={condition}
      />

        } />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}


