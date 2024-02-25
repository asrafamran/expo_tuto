import { View, Text } from "react-native";
import React from "react";

import { StyleSheet } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 20 },
  card: {
    minWidth: 327,
    minHeight: 170,
    backgroundColor: "black",
  },
});

export default Page;
