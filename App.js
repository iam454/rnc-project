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

const Tab = createBottomTabNavigator();

const API_KEY = "223bbc26d2844113d819cabfeff1a06e";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      currentTemp: data.current.temp,
      currentTempMin: data.daily[0].temp.min,
      currentTempMax: data.daily[0].temp.max,
      currentCondition: data.current.weather[0].main,
      tomorrowTempDay: data.daily[1].temp.day,
      tomorrowTempNight: data.daily[1].temp.night,
      tomorrowTempMin: data.daily[1].temp.min,
      tomorrowTempMax: data.daily[1].temp.max,
      tomorrowCondition: data.daily[1].weather[0].main,
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
    const {
      isLoading,
      currentTemp,
      currentTempMin,
      currentTempMax,
      currentCondition,
      tomorrowTempDay,
      tomorrowTempNight,
      tomorrowTempMin,
      tomorrowTempMax,
      tomorrowCondition,
    } = this.state;
    return isLoading ? (
      <Loading />
    ) : (

    //   <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === 'Music') {
    //           iconName = focused
    //             ? 'musical-notes'
    //             : 'musical-notes-outline'
    //         } else if (route.name === 'Weather') {
    //           iconName = focused ? "cloud" : "cloud-outline";
    //         }

    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //       tabBarActiveTintColor: 'skyblue',
    //       tabBarInactiveTintColor: 'gray',
    //     })}
    //   >
    //     <Tab.Screen name="Music" component={MusicScreen} />
    //     <Tab.Screen name="Weather" component={SettingScreen} />

    //   </Tab.Navigator>
    // </NavigationContainer>


    <Weather
    currentTemp={Math.round(currentTemp)}
    currentTempMin={Math.round(currentTempMin)}
    currentTempMax={Math.round(currentTempMax)}
    currentCondition={currentCondition}
    tomorrowTempDay={Math.round(tomorrowTempDay)}
    tomorrowTempNight={Math.round(tomorrowTempNight)}
    tomorrowTempMin={Math.round(tomorrowTempMin)}
    tomorrowTempMax={Math.round(tomorrowTempMax)}
    tomorrowCondition={tomorrowCondition}
  />
          );
  }
}

