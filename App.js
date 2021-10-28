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
      <Tab.Navigator>
        <Tab.Screen name="Music" component={MusicScreen} />
        <Tab.Screen name ="Weather" component={
        Weather
        } />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}


