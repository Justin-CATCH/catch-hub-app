import * as React from "react";
import Markdown from "react-native-markdown-renderer";
import { Flex, Box, ScrollView, Button } from "dripsy";

import { Text, View } from "../components/Themed";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

import { MOCK_LIBRARY_DATA } from "../mock-data";
import { theme } from "../theme";
import { Card } from "react-native-paper";
import { WebView } from "react-native-webview";
import { Image } from "react-native";

const Stack = createStackNavigator();

const icons = {
  "brown-bag": require(`../icons/brown-bag.png`),
  file: require(`../icons/file.png`),
  frontend: require(`../icons/frontend.png`),
  backend: require(`../icons/backend.png`),
  microservices: require(`../icons/microservices.png`),
  data: require(`../icons/data.png`),
  security: require(`../icons/security.png`),
  folder: require(`../icons/folder.jpg`),
};

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="library-root"
      screenOptions={{
        headerTitle: "Library",
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerBackTitle: "Back",
        headerTintColor: "white",
        headerLeft: (props) => {
          if (!props.canGoBack) {
            return null;
          }

          return <HeaderBackButton {...props} tintColor="white" />;
        },
      }}
    >
      <Stack.Screen name="library-file" component={LibraryFileScreen} />
      <Stack.Screen name="library-folder" component={LibraryFolderScreen} />
      <Stack.Screen name="library-root" component={LibraryRootScreen} />
    </Stack.Navigator>
  );
};

function LibraryFileScreen({ route, navigation }) {
  const [file, setFile] = React.useState("");

  React.useEffect(() => {
    fetch(route.params.url)
      .then((res) => {
        return res.text();
      })
      .then((md) => {
        setFile(md);
      });
  }, []);

  return (
    <ScrollView>
      <View style={{ padding: 12 }}>
        <Markdown>{file}</Markdown>
      </View>
    </ScrollView>
  );
}

function LibraryFolderScreen({ route, navigation }) {
  const folder = route.params.folder;

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: folder.name,
    });
  }, []);

  return (
    <ScrollView
      sx={{
        backgroundColor: theme.colors.backgroundColor,
        display: "flex",
        flex: 1,
      }}
      contentContainerStyle={{
        justifyContent: "center",
      }}
    >
      <Flex
        sx={{
          flexWrap: "wrap",
          flex: 1,
          justifyContent: "flex-start",
          maxWidth: 800,
        }}
      >
        {folder.children.map((file) => (
          <Folder
            key={file.name}
            folder={file}
            onPress={() => {
              if (file.type === "video") {
                return;
              }
              navigation.push("library-file", { url: file.url });
            }}
          />
        ))}
      </Flex>
    </ScrollView>
  );
}

function LibraryRootScreen({ route, navigation }) {
  return (
    <ScrollView
      sx={{
        backgroundColor: theme.colors.backgroundColor,
        display: "flex",
        flex: 1,
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
          <Folder
            key={folder.name}
            folder={folder}
            onPress={() => {
              navigation.push("library-folder", { folder });
            }}
          />
        ))}
      </Flex>
    </ScrollView>
  );
}

const Folder = ({ folder, onPress }) => {
  if (folder.type === "video") {
    return (
      <Box
        key={folder.name}
        sx={{
          p: 15,
          width: ["50%", "30%"],
          color: "black",
        }}
      >
        <Card elevation={2} onPress={onPress}>
          <WebView
            style={{
              height: 100,
            }}
            source={{ uri: folder.url }} // Can be a URL or a local file.
          />
          <Card.Content>
            <Text
              style={{
                color: "black",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {folder.name}
            </Text>
          </Card.Content>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      key={folder.name}
      sx={{
        padding: 15,
        width: ["50%", "30%"],
      }}
    >
      <Card elevation={2} onPress={onPress} style={{ display: "flex" }}>
        <Card.Content>
          <Flex
            sx={{
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                resizeMode: "contain",
              }}
              source={icons[folder.icon] || icons.file}
            />
          </Flex>
          <Text
            style={{
              color: "black",
              height: 34,
              width: "100%",
              flexShrink: 1,
              textAlign: "center",
            }}
          >
            {folder.name}
          </Text>
        </Card.Content>
      </Card>
    </Box>
  );
};
