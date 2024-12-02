import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={24} color="#007bff" />
      </TouchableOpacity>
      <Text style={styles.text}>Profile</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} color="#007bff" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 60,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9", // Soft background for the navbar
    shadowColor: "#000", // Adding shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: "#333", // Dark color for better contrast
    textAlign: "center",
    fontWeight: "bold",
  },
});
