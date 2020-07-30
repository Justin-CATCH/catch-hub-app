import * as React from "react";
import { StyleSheet, Button } from "react-native";
import Markdown from "react-native-markdown-renderer";
import { Flex, Box, ScrollView } from "dripsy";

import { Text, View } from "../components/Themed";
import { createStackNavigator } from "@react-navigation/stack";

import { MOCK_LIBRARY_DATA } from "../mock-data";
import { theme } from "../theme";
import { Card } from "react-native-paper";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="library-folder" component={LibraryRootScreen} />
      <Stack.Screen name="library-file" component={LibraryFileScreen} />
    </Stack.Navigator>
  );
};

function LibraryFileScreen({ route, navigation }) {
  const [file, setFile] = React.useState(null);

  React.useEffect(() => {
    fetch(route.params.url)
      .then((res) => res.text())
      .then((md) => {
        setFile(md);
      });
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            title="Back"
          />
        </View>
        <Markdown>{file}</Markdown>
      </View>
    </ScrollView>
  );
}

function LibraryRootScreen({ route, navigation }) {
  const [folder, setFolder] = React.useState(null);

  if (folder !== null) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Button
              onPress={() => {
                setFolder(null);
              }}
              title="Back"
            />
            {folder.children.map((file) => (
              <View key={file.name}>
                <Text
                  onPress={() => {
                    navigation.navigate("library-file", { url: file.url });
                  }}
                >
                  {file.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }

  const icons = {
    "brown-bag": require(`../icons/brown-bag.png`),
  };

  return (
    <ScrollView
      sx={{
        backgroundColor: theme.colors.backgroundColor,
        display: "flex",
        flex: 1,
        px: 15,
      }}
    >
      <Flex
        sx={{
          flexWrap: "wrap",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {MOCK_LIBRARY_DATA.map((folder) => (
          <Box
            key={folder.name}
            sx={{
              padding: 2,
              width: ["50%", "30%"],
            }}
          >
            <Card
              elevation={2}
              onPress={() => {
                setFolder(folder);
              }}
            >
              <Card.Cover
                style={{
                  backgroundColor: "white",
                }}
                source={icons[folder.icon]}
              />
              <Card.Content>
                <Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  {folder.name}
                </Text>
              </Card.Content>
            </Card>
          </Box>
        ))}
      </Flex>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
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
