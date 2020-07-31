import * as React from "react";
import { Text, View } from "dripsy";
import { Image } from "react-native";
import { theme } from "../theme";
import { Headline, Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default function MeScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("TellUsAboutYourSelf");
    }, 2000);
  });
  return (
    <View
      sx={{
        backgroundColor: theme.colors.tertiary,
        display: "flex",
        flex: 1,
        px: 15,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animatable.View animation="rubberBand">
        <Image
          resizeMode="contain"
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../icons/catch-logo.png")}
        />
      </Animatable.View>
      <Headline style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
        CatchHub
      </Headline>
      <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
        Knowledge sharing makes easy
      </Text>
    </View>
  );
}
