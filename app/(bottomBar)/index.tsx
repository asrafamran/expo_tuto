import React, { useState } from "react";
import {  Stack } from "expo-router";
import { View, Text, TouchableOpacity} from "react-native";

import { StyleSheet } from "react-native";

// Header
import PocketHeader from "@/components/PocketHeader";

// Sections
import Profile from "@/components/Profile";
import Account from "@/components/Account";
import DebitCard from "@/components/DebitCards";



type ComponentName = "Account" | "DebitCard";

const Page = () => {
  const [activeComponent, setActiveComponent] =
    useState<ComponentName>("Account");

  return (
    <View>
      <Stack.Screen options={{ header: () => <PocketHeader /> }} />
      <Profile />

      <View style={styles.container}>
        <View style={styles.navigation}>
          {/* Account */}
          <TouchableOpacity
            onPress={() => setActiveComponent("Account")}
            style={[
              styles.button,
              activeComponent === "Account"
                ? styles.buttonActive
                : styles.buttonInactive,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                activeComponent === "Account"
                  ? styles.buttonTextActive
                  : styles.buttonTextInactive,
              ]}
            >
              Account
            </Text>
          </TouchableOpacity>

          {/* Debit Card */}
          <TouchableOpacity
            onPress={() => setActiveComponent("DebitCard")}
            style={[
              styles.button,
              activeComponent === "DebitCard"
                ? styles.buttonActive
                : styles.buttonInactive,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                activeComponent === "DebitCard"
                  ? styles.buttonTextActive
                  : styles.buttonTextInactive,
              ]}
            >
              Debit Card
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {activeComponent === "Account" && <Account />}
          {activeComponent === "DebitCard" && <DebitCard />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 12,
  },
  navigation: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  // Button
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 20,
    backgroundColor: "",
  },
  buttonActive: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 20,
    backgroundColor: "#F0B6CD",
  },
  buttonInactive: {
    backgroundColor: "#F5FAFC",
  },

  // Button Text
  buttonText: {
    fontSize: 16,
    color: "#727272",
  },
  buttonTextActive: {
    color: "#D63D7B",
  },
  buttonTextInactive: {
    color: "#727272",
  },
});

export default Page;
