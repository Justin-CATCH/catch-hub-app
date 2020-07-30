import * as React from "react";
import { Card } from "react-native-paper";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../theme";
import { ScrollView, Flex, Box, Text, View } from "dripsy";
import { useDispatch } from "react-redux";
import { doSomething } from "../store";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import SwipeCards from "react-native-swipe-cards";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [people, loading] = useCollection(dbInstance.collection("people"));

  const peopleData = people?.docs?.map((doc) => doc.data()) || [];

  return (
    <View
      sx={{
        backgroundColor: theme.colors.backgroundColor,
        display: "flex",
        flex: 1,
      }}
    >
      <WebView
        style={{
          height: 100,
        }}
        source={{ uri: "https://www.youtube.com/embed/Bg4qmnncwhk" }} // Can be a URL or a local file.
      />
      <Flex
        sx={{
          width: "100%",
        }}
      >
        <Card
          style={{
            width: "100%",
            marginTop: 10,
          }}
        >
          <Card.Content>
            <AnimatedCircularProgress
              size={120}
              width={15}
              backgroundWidth={5}
              fill={50}
              tintColor="#00ff00"
              tintColorSecondary="#ff0000"
              backgroundColor="#3d5875"
              arcSweepAngle={240}
              rotation={240}
              lineCap="round"
            />
          </Card.Content>
        </Card>
      </Flex>
    </View>
  );
}
