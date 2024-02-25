import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Personal Financial Management</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});

export default Page;
