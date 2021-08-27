import React from "react";
import { Image, View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";

import ash from "./components/ash.png";
import clearNight from "./components/clear-night.png";
import clear from "./components/clear.png";
import clouds from "./components/clouds.png";
import drizzle from "./components/drizzle.png";
import dustSand from "./components/dust-sand.png";
import mistSmokeHazeFog from "./components/mist-smoke-haze-fog.png";
import rain from "./components/rain.png";
import snow from "./components/snow.png";
import squall from "./components/squall.png";
import thunderstorm from "./components/thunderstorm.png";
import tornado from "./components/tornado.png";
//한꺼번에 import하는 방식을 몰라서.. 하나씩 했어요.. 아는 분 있으면 수정바랍니다..

const weatherOptions = {
  Thunderstorm: {
    iconName: thunderstorm,
    gradient: ["#304352", "#d7d2cc"],
  },
  Drizzle: {
    iconName: drizzle,
    gradient: ["#2191d0", "#bce6f9"],
  },
  Rain: {
    iconName: rain,
    gradient: ["#8e9eab", "#eef2f3"],
  },
  Snow: {
    iconName: snow,
    gradient: ["#8e9eab", "#eef2f3"],
  },
  Mist: {
    iconName: mistSmokeHazeFog,
    gradient: ["#656395", "#86A8E7", "#9BD7D9"],
  },
  Smoke: {
    iconName: mistSmokeHazeFog,
    gradient: ["#656395", "#86A8E7", "#9BD7D9"],
  },
  Haze: {
    iconName: mistSmokeHazeFog,
    gradient: ["#656395", "#86A8E7", "#9BD7D9"],
  },
  Dust: {
    iconName: dustSand,
    gradient: ["#B79891", "#94716B"],
  },
  Fog: {
    iconName: mistSmokeHazeFog,
    gradient: ["#656395", "#86A8E7", "#9BD7D9"],
  },
  Sand: {
    iconName: dustSand,
    gradient: ["#B79891", "#94716B"],
  },
  Dust: {
    iconName: dustSand,
    gradient: ["#B79891", "#94716B"],
  },
  Ash: {
    iconName: ash,
    gradient: ["#B79891", "#94716B"],
  },
  Squall: {
    iconName: squall,
    gradient: ["#304352", "#d7d2cc"],
  },
  Tornado: {
    iconName: tornado,
    gradient: ["#304352", "#d7d2cc"],
  },
  Clear: {
    iconName: clear,
    gradient: ["#2191d0", "#bce6f9"],
  },
  Clouds: {
    iconName: clouds,
    gradient: ["#2191d0", "#bce6f9"],
  },
};

export default function Weather({ name, temp, temp_max, temp_min, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.conditionView}>
        <Text style={styles.name}>Today, {name}</Text>
        <Text style={styles.condition}>{condition}</Text>
      </View>
      <View style={styles.imgView}>
        <Image
          source={weatherOptions[condition].iconName}
          style={{ width: 250, height: 200 }}
        />
        <Text style={styles.temp}>{temp}°</Text>
        <View style={styles.tempMinMaxView}>
          <Text style={styles.tempMax}>Hi: {temp_max}°</Text>
          <Text style={styles.tempMin}>Lo: {temp_min}°</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conditionView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgView: {
    flex: 2,
    alignItems: "center",
  },
  tempMinMaxView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    fontSize: 40,
    paddingTop: 60,
    paddingBottom: 20,
  },
  condition: {
    fontSize: 30,
    paddingTop: 20,
  },
  temp: {
    fontSize: 30,
    paddingVertical: 20,
  },
  tempMax: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  tempMin: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
