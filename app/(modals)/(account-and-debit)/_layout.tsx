import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Account",
          tabBarLabel: "Account",
        }}
      />
    </Tabs>
  );
};

export default Layout;
