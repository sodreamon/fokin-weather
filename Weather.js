import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
      >
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons name="weather-cloudy" size={80} />
          <Text>{condition}</Text>
          <Text style={styles.text}>{temp}</Text>
        </View>
        <View style={styles.halfContainer}></View>
      </LinearGradient>
    </View>
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
  text: {},
  halfContainer: { flex: 1, justifyContent: "center", alignItems: "center" }
});
