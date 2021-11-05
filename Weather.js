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

import {
  NanumGothic_400Regular,
  NanumGothic_700Bold,
  NanumGothic_800ExtraBold
} from '@expo-google-fonts/nanum-gothic'


import { 
  Allerta_400Regular 
} from '@expo-google-fonts/allerta'



import Loading from "./Loading";
import { useFonts } from "expo-font";




import ash from "./components/ash.png";
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
  currentTempMin,
  currentTempMax,
  currentCondition,
  tomorrowTempDay,
  tomorrowTempNight,
  tomorrowTempMin,
  tomorrowTempMax,
  tomorrowCondition,
}) 

{
  let [fontsLoaded,error] = useFonts({
    Allerta_400Regular ,
  });
  
  if(!fontsLoaded){
    return <Loading />;
  }
  return (
    <Swiper loop={false} showsPagination={false}>
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
              style={{ width: 200, height: 180 }}
            />
            <Text style={styles.temp}>{currentTemp}°</Text>
          </View>
          <View style={styles.tempMinMaxView}>
            <Text style={styles.tempMin}>Lo : {currentTempMin}°</Text>
            <Text style={styles.tempMax}>Hi : {currentTempMax}°</Text>
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
              style={{ width: 200, height: 180 }}
            />
            <Text style={styles.tempDay}>Day : {tomorrowTempDay}°</Text>
            <Text style={styles.tempNight}>Night : {tomorrowTempNight}°</Text>
          </View>

          <View style={styles.tempMinMaxView}>
            <Text style={styles.tempMin}>Lo : {tomorrowTempMin}°</Text>
            <Text style={styles.tempMax}>Hi : {tomorrowTempMax}°</Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </Swiper>
  );
}

Weather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  currentTempMin: PropTypes.number.isRequired,
  currentTempMax: PropTypes.number.isRequired,
  tomorrowTempDay: PropTypes.number.isRequired,
  tomorrowTempNight: PropTypes.number.isRequired,
  tomorrowTempMin: PropTypes.number.isRequired,
  tomorrowTempMax: PropTypes.number.isRequired,
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imgView: {
    flex: 3,
    alignItems: "center",
  },
  tempMinMaxView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 100,
  },
  name: {
    fontSize: 35,
    paddingTop: 60,
    paddingBottom: 5,
    color: "#ffffff",
    fontFamily : "Allerta_400Regular",
  },
  condition: {
    fontSize: 30,
    paddingTop: 20,
    color: "#ffffff",
    fontFamily : "Allerta_400Regular",
  },
  temp: {
    fontSize: 30,
    paddingTop: 10,
    color: "#ffffff",
    fontFamily : "Allerta_400Regular",
  },
  tempDay: {
    fontSize: 25,
    paddingTop: 5,
    color: "#ffffff",
    fontFamily : "Allerta_400Regular",
  },
  tempNight: {
    fontSize: 25,
    paddingTop: 5,
    color: "#ffffff",
    fontFamily : "Allerta_400Regular",
  },
  tempMax: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#ffffff",
    fontFamily : "Allerta_400Regular",
  },
  tempMin: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#ffffff",
    fontFamily : "Allerta_400Regular",
  },
});