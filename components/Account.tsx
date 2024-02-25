import React, { useRef, useState } from "react";
import { Link } from "expo-router";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Logo
import duitNow from "@/assets/images/transfer/DuitNow.png";
import fundAccounts from "@/assets/images/transfer/FundsAcc.png";
import transfer from "@/assets/images/transfer/Transfer.png";

const Cards = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [indicatorWidth, setIndicatorWidth] = useState<number>(40);
  const [indicatorWidth2, setIndicatorWidth2] = useState<number>(5);

  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const newWidth1 = Math.min(Math.max(5, 40 - scrollX / 10), 40);
    const newWidth2 = Math.min(Math.max(5, 5 + scrollX / 10), 40);
    setIndicatorWidth(newWidth1);
    setIndicatorWidth2(newWidth2);
  };

  return (
    <>
      {/* Cards */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
        onScroll={handleScroll}
        scrollEventThrottle={20}
        bounces={false}
      >
        <View style={styles.container}>
          {/* Cards */}
          <View style={styles.card}>
            <LinearGradient
              colors={["#CC0D5A", "#237AF9"]}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.cardInfo}>
                <View>
                  <Text
                    style={[styles.text, { fontFamily: "poppins-semibold" }]}
                  >
                    Be U Qard Savings Account-i
                  </Text>
                  <Text style={styles.text}>080234568972310</Text>
                </View>
                <View style={styles.default}>
                  <Text style={[styles.defaultText]}>Default</Text>
                </View>
              </View>
              <Text style={[styles.text, styles.moneyText]}>RM 1230.00</Text>
            </LinearGradient>
          </View>

          <View style={[styles.card, { marginRight: 40 }]}>
            <LinearGradient
              colors={["#1AA062", "#98BFF9"]}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.cardInfo}>
                <View>
                  <Text
                    style={[styles.text, { fontFamily: "poppins-semibold" }]}
                  >
                    Al-Awfar
                  </Text>
                  <Text style={styles.text}>032236893272310</Text>
                </View>
              </View>
              <Text style={[styles.text, styles.moneyText]}>RM 200.00</Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>

      {/* Scroll bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          marginTop: 16,
        }}
      >
        <View
          style={{
            width: indicatorWidth,
            height: 5, // or any other height you prefer
            backgroundColor: "#CC0D5A", // or any color you prefer
            borderRadius: indicatorWidth === 40 ? indicatorWidth / 2 : 20, // Ensure rounded corners for a circle
          }}
        />
        <View
          style={{
            width: indicatorWidth2,
            height: 5, // or any other height you prefer
            backgroundColor: "#CC0D5A", // or any color you prefer
            borderRadius: indicatorWidth === 40 ? 20 : indicatorWidth / 2, // Ensure rounded corners for a circle
          }}
        />
      </View>

      {/* Transactions */}
      <View style={styles.tranContainer}>
        {/* Fund Account */}
        <Link href={"/(modals)/(transactions)/fundAccount"}>
          <View style={[styles.tranButton, { gap: 4 }]}>
            <Image
              source={fundAccounts}
              style={{ width: 35, height: 30, resizeMode: "cover" }}
            />
            <Text style={{ textAlign: "center" }}>Fund Account</Text>
          </View>
        </Link>
        {/* QR */}
        <Link href={"/(modals)/(transactions)/qrDuitnow"}>
          <View
            style={[
              styles.tranButton,
              { borderWidth: 2, borderColor: "#CC0D5A" },
            ]}
          >
            <Image
              source={duitNow}
              style={{ width: 50, height: 55, resizeMode: "cover" }}
            />
          </View>
        </Link>
        {/* Pay & Transfer */}
        <Link href={"/(modals)/(transactions)/transfer"}>
          <View style={[styles.tranButton, { gap: 4 }]}>
            <Image
              source={transfer}
              style={{ width: 35, height: 30, resizeMode: "cover" }}
            />
            <Text style={{ textAlign: "center" }}>Pay & Transfer</Text>
          </View>
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },

  // Card
  card: {
    minWidth: 327,
    minHeight: 170,
    borderRadius: 16,
    flexDirection: "column",
  },
  cardGradient: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 16,
  },

  // Info
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "poppins",
  },

  // default pill
  default: {
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  defaultText: {
    color: "#221F20",
  },

  // Money amount
  moneyText: {
    fontSize: 24,
    fontFamily: "poppins-semibold",
  },

  // Transaction
  tranContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 24,
    marginHorizontal: 30,
  },
  tranButton: {
    width: 90,
    height: 90,
    borderRadius: 20,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default Cards;
