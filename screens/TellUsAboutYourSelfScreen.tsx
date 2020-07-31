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
        backgroundColor: theme.colors.backgroundColor,
        display: "flex",
        flex: 1,
        px: 15,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
            onFocus={() => {
              setMenuVisible(true);
            }}
          />
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={<Text sx={{ color: theme.colors.backgroundColor }}>a</Text>}
          >
            <Menu.Item
              onPress={() => {
                setPosition("item 1");
                setMenuVisible(false);
              }}
              title="Item 1"
            />
            <Menu.Item
              onPress={() => {
                setPosition("item 2");
                setMenuVisible(false);
              }}
              title="Item 2"
            />
            <Menu.Item
              onPress={() => {
                setPosition("item 3");
                setMenuVisible(false);
              }}
              title="Item 3"
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
