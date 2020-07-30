import * as React from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import Markdown from "react-native-markdown-renderer";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { MOCK_LIBRARY_DATA } from "../mock-data";

export default function LibraryScreen() {
  const [file, setFile] = React.useState(null);
  const [folder, setFolder] = React.useState(null);

  if (file !== null) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Button
              onPress={() => {
                setFile(null);
              }}
              title="Back"
            />
          </View>
          <Markdown>{file}</Markdown>
        </View>
      </ScrollView>
    );
  }

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
                    fetch(file.url)
                      .then((res) => res.text())
                      .then((md) => {
                        setFile(md);
                      });
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
