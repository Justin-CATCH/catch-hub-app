import * as React from "react";
import { Text, View } from "dripsy";
import { Image } from "react-native";
import { theme } from "../theme";
import { Headline, Button } from "react-native-paper";
import Wizard from "react-native-wizard";

export default function MeScreen({ navigation }) {
  return (
    <View
      sx={{
        backgroundColor: theme.colors.backgroundColor,
        display: "flex",
        flex: 1,
        px: 15,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../icons/catch-logo.png")}
      />
      <Headline>CatchHub</Headline>
      <Text>A centralised place for learning</Text>
      <Button
        mode="contained"
        onPress={() => navigation.push("TellUsAboutYourSelf")}
      >
        I'm in
      </Button>
    </View>
  );
}
