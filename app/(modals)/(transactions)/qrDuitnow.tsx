import { CameraView, useCameraPermissions } from "expo-camera/next";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <Text>Please Allow Camera permission</Text>;
  }

  if (!permission.granted) {
    <Text>Permission Granted</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView facing={"back"}>
        <View style={styles.camera}>
          <Text>Test</Text>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    height: 600,
    width:300
  },
});

export default Page;
