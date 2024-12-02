import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image 
          source={require("../../../assets/me.jpg")} 
          style={styles.image} 
        />
        <Text style={styles.nameText}>ARDIAN SYAHRUL JULIAWAN SUHENDRA</Text>
        <View style={styles.counterContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.numberText}>404</Text>
            <Text style={styles.labelText}>Followers</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9", // Soft background color for the whole container
    shadowColor: "#000", // Adding shadow to the container for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  backgroundContainer: {
    backgroundColor: "#4CAF50", // Green background color for the header section
    paddingBottom: 15,
    paddingTop: 10,
    width: "100%", // Ensuring it takes full width
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    shadowColor: "#000", // Adding shadow for the background
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff", // White border around the image for separation
    marginBottom: 15,
    shadowColor: "#000", // Shadow effect for the image
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // White color for the name text to contrast the background
    marginTop: 10,
    textAlign: "center", // Center the text
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff", // White color for the number
  },
  labelText: {
    color: "rgba(255, 255, 255, 0.7)", // Slightly transparent white for label
    fontSize: 12,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#007bff", // Attractive blue color for the button
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000", // Adding shadow to the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  editButtonText: {
    color: "#fff", // White text on button
    fontSize: 14,
    fontWeight: "bold",
  },
});
