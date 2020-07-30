import * as React from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import Markdown from "react-native-markdown-renderer";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function LibraryScreen() {
  const [data, setData] = React.useState("");
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app"
    )
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.branch.files);
      });
  }, []);

  if (data) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Button
              onPress={() => {
                setData(null);
              }}
              title="Back"
            />
          </View>
          <Markdown>{data}</Markdown>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {files.map((file) => (
          <View key={file.path}>
            <Text
              onPress={() => {
                console.log("click");
                fetch(file._links.content)
                  .then((res) => res.text())
                  .then((md) => {
                    setData(md);
                  });
              }}
            >
              {file.name}
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
