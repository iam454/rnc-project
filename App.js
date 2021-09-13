import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

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
      currentCondition: data.current.weather[0].main,
      tomorrowTemp: data.daily[1].temp.day,
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
      currentCondition,
      tomorrowTemp,
      tomorrowCondition,
    } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        currentTemp={Math.round(currentTemp)}
        currentCondition={currentCondition}
        tomorrowTemp={Math.round(tomorrowTemp)}
        tomorrowCondition={tomorrowCondition}
      />
    );
  }
}
