import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

export default function Weather({ name, temp, temp_max, temp_min, condition }) {
  return (
    <View style={styles.container}>
      <View style={styles.conditionView}>
        <Text style={styles.name}>Today, {name}</Text>
        <Text style={styles.condition}>{condition}</Text>
      </View>
      <View style={styles.imgView}>
        <Ionicons name="rainy" size={220} color="black" />
        <Text style={styles.temp}>{temp}°</Text>
        <View style={styles.tempMinMaxView}>
          <Text style={styles.tempMax}>Hi: {temp_max}°</Text>
          <Text style={styles.tempMin}>Lo: {temp_min}°</Text>
        </View>
      </View>
    </View>
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
