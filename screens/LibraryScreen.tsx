import * as React from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import Markdown from "react-native-markdown-renderer";

import { Text, View } from "../components/Themed";
import { Card, Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import { MOCK_LIBRARY_DATA } from "../mock-data";

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

  return (
    <ScrollView>
      <View style={styles.container}>
        {MOCK_LIBRARY_DATA.map((folder) => (
          <View key={folder.name}>
            <Text
              onPress={() => {
                setFolder(folder);
              }}
            >
              {folder.name}
            </Text>
          </View>
        ))}
      </View>
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
