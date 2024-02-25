import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import { StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";

const Profile = () => {
  // Sample initial and name
  const initial = "A";
  const name = "Asyraaf Amran";

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {/* Circular Avatar Container */}
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: "#B2E1DF", // Example color
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>{initial}</Text>
        </View>

        {/* User Name */}
        <Text style={styles.profileName}>{name}</Text>
      </View>

      {/* Hamburger Menu Icon */}
      <TouchableWithoutFeedback
        onPress={() => console.log("Hamburger menu pressed")}
      >
        <View>
          <Entypo name="menu" size={30} color="black" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    fontFamily: "poppins",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
  },
});

export default Profile;
