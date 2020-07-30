import * as React from "react";
import { StyleSheet, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { ProgressBar, Colors } from "react-native-paper";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useCollection } from "react-firebase-hooks/firestore";

import { useDispatch } from "react-redux";
import { doSomething } from "../store";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        title="Do Something"
        onPress={() => {
          dispatch(doSomething());
        }}
      ></Button>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
