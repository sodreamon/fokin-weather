import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#FFD200", "#F7971E"],
    title: "Let's fuck on house roof",
    subtitle: "with neighbor booyaah"
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#093028", "#237A57"],
    title: "Let's fuck on house roof",
    subtitle: "with neighbor booyaah"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#F0F2F0", "#000C40"],
    title: "Let's fuck on house roof",
    subtitle: "with neighbor booyaah"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#4ca2cd", "#67B26F"],
    title: "Let's fuck on house roof",
    subtitle: "with neighbor booyaah"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#89fffd", "#ef32d9"],
    title: "Let's fuck on house roof",
    subtitle: "with neighbor booyaah"
  },
  Atmosphere: {
    iconName: "weather-windy",
    gradient: ["#A1FFCE", "#FAFFD1"],
    title: "Let's fuck on house roof",
    subtitle: "with neighbor booyaah"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#BE93C5", "#7BC6CC"],
    title: "Let's fuck on house roof",
    subtitle: "with neighbor booyaah"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          //{}안의 내용은 .iconName 또는 ["iconName"] 둘다 가능 하지만 [""]를 사용한 후 다시 [""]는 사용 안됨
          size={100}
          color="white"
        />
        <Text style={styles.condition}>{condition}</Text>
        <Text style={styles.text}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: { color: "white", fontSize: 50 },
  condition: {
    color: "white",
    fontSize: 30
  },
  halfContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { color: "white" },
  subtitle: { color: "white" }
});
