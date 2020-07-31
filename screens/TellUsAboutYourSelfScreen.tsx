import React, { useState } from "react";
import { Text, View, Flex, Box } from "dripsy";
import { Image } from "react-native";
import { theme } from "../theme";
import { Headline, Button, TextInput, Menu, Divider } from "react-native-paper";

export default function TellMeAboutYourSelfScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState("");

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
      <Image
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../icons/catch-logo.png")}
      />
      <Headline>Tell us about yourself</Headline>
      <Flex
        sx={{
          width: "80%",
          flexDirection: "column",
        }}
      >
        <Flex
          sx={{
            flexGrow: 1,
            marginTop: 2,
          }}
        >
          <TextInput
            style={{
              width: "100%",
            }}
            placeholder="Your name"
            label="Your name"
          />
        </Flex>
        <Flex
          sx={{
            width: "100%",
            marginTop: 2,
          }}
        >
          <TextInput
            style={{
              width: "100%",
            }}
            label="Your email"
          />
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            marginTop: 2,
          }}
        >
          <TextInput
            style={{
              width: "100%",
            }}
            placeholder="Select your position"
            label="Your position"
            value={position}
            disabled={true}
            onTouchStart={() => {
              setMenuVisible(true);
            }}
            onClick={() => {
              setMenuVisible(true);
            }}
          />
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={<Text sx={{ color: theme.colors.tertiary }}>a</Text>}
          >
            <Menu.Item
              onPress={() => {
                setPosition("Backend Developer");
                setMenuVisible(false);
              }}
              title="Backend Developer"
            />
            <Menu.Item
              onPress={() => {
                setPosition("Frontend Developer");
                setMenuVisible(false);
              }}
              title="Frontend Developer"
            />
            <Menu.Item
              onPress={() => {
                setPosition("UX/UI Designer");
                setMenuVisible(false);
              }}
              title="UX/UI Designer"
            />
            <Menu.Item
              onPress={() => {
                setPosition("Business Intelligence");
                setMenuVisible(false);
              }}
              title="Business Intelligence"
            />
          </Menu>
        </Flex>
      </Flex>
      <Flex
        sx={{
          marginTop: 2,
        }}
      >
        <Button mode="contained" onPress={() => navigation.replace("Root")}>
          Done!
        </Button>
      </Flex>
    </View>
  );
}
