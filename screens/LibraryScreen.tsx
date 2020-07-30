import * as React from "react";
import Markdown from "react-native-markdown-renderer";
import { Flex, Box, ScrollView, Button } from "dripsy";

import { Text, View } from "../components/Themed";
import { createStackNavigator } from "@react-navigation/stack";

import { MOCK_LIBRARY_DATA } from "../mock-data";
import { theme } from "../theme";
import { Card } from "react-native-paper";

const Stack = createStackNavigator();

const icons = {
  "brown-bag": require(`../icons/brown-bag.png`),
  file: require(`../icons/file.png`),
};

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
      <View style={{ paddingLeft: 12 }}>
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
        <Button
          onPress={() => {
            setFolder(null);
          }}
          title="Back"
        />
        <Flex
          sx={{
            flexWrap: "wrap",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {folder.children.map((file) => (
            <Folder
              key={file.name}
              folder={file}
              onPress={() => {
                navigation.navigate("library-file", { url: file.url });
              }}
            />
          ))}
        </Flex>
      </ScrollView>
    );
  }

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
          <Folder
            key={folder.name}
            folder={folder}
            onPress={() => setFolder(folder)}
          />
        ))}
      </Flex>
    </ScrollView>
  );
}

type FolderProps = {
  folder: any;
  onPress: any;
};

const Folder = ({ folder, onPress }) => {
  return (
    <Box
      key={folder.name}
      sx={{
        padding: 2,
        width: ["50%", "30%"],
      }}
    >
      <Card elevation={2} onPress={onPress}>
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
  );
};
