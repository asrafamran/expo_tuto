import React from "react";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";

import { Octicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: { fontFamily: "poppins-bold" },
        tabBarStyle: {
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="budgeting"
        options={{
          title: "Budgeting",
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="graph" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="graph"
        options={{
          title: "Personal Financial Management",
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="graph-pie" color={color} size={36} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Pocket",
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="wallet" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="heart"
              size={28}
              color={color}
              solid={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: "Notifications",
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 name="bell" size={28} color={color} solid={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
