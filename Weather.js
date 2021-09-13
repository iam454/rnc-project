import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";

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
import bottom from "./components/bottom.png";

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

const imagePath = require("./components/bottom.png");

export default function Weather({
  currentTemp,
  currentCondition,
  tomorrowTemp,
  tomorrowCondition,
}) {
  return (
    <Swiper index={1} loop={false} showsPagination={false}>
      {/* 어제 날씨를 알려주는 슬라이드 */}
      {/* <LinearGradient
        colors={weatherOptions[yesterdayCondition].gradient}
        style={styles.container}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={imagePath}
          resizeMode="cover"
        >
          <StatusBar barStyle="light-content" />
          <View style={styles.conditionView}>
            <Text style={styles.name}>Yesterday</Text>
            <Text style={styles.condition}>{yesterdayCondition}</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={weatherOptions[yesterdayCondition].iconName}
              style={{ width: 250, height: 200 }}
            />
            <Text style={styles.temp}>{yesterdayTemp}°</Text>
          </View>
        </ImageBackground>
      </LinearGradient> */}

      {/* 오늘 날씨를 알려주는 슬라이드 */}
      <LinearGradient
        colors={weatherOptions[currentCondition].gradient}
        style={styles.container}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={imagePath}
          resizeMode="cover"
        >
          <StatusBar barStyle="light-content" />
          <View style={styles.conditionView}>
            <Text style={styles.name}>Today</Text>
            <Text style={styles.condition}>{currentCondition}</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={weatherOptions[currentCondition].iconName}
              style={{ width: 250, height: 200 }}
            />
            <Text style={styles.temp}>{currentTemp}°</Text>
          </View>
        </ImageBackground>
      </LinearGradient>

      {/* 내일 날씨를 알려주는 슬라이드 */}
      <LinearGradient
        colors={weatherOptions[tomorrowCondition].gradient}
        style={styles.container}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={imagePath}
          resizeMode="cover"
        >
          <StatusBar barStyle="light-content" />
          <View style={styles.conditionView}>
            <Text style={styles.name}>Tomorrow</Text>
            <Text style={styles.condition}>{tomorrowCondition}</Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={weatherOptions[tomorrowCondition].iconName}
              style={{ width: 250, height: 200 }}
            />
            <Text style={styles.temp}>{tomorrowTemp}°</Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </Swiper>
  );
}

Weather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  tomorrowTemp: PropTypes.number.isRequired,
  currentCondition: PropTypes.oneOf([
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
  tomorrowCondition: PropTypes.oneOf([
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
