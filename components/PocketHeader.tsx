import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PocketHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View>
        <Text>PocketHeader</Text>
      </View>
    </SafeAreaView>
  );
};

export default PocketHeader;
