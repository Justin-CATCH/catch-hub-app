import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ThemeProvider } from "dripsy";
import { theme } from "./theme";
import { Provider as PaperProvider, Portal } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { store, doSomething } from "./store";
import { Button } from "react-native";
import Permissions from "expo-permissions";

async function alertIfRemoteNotificationsDisabledAsync() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== "granted") {
    alert(
      "Hey! You might want to enable notifications for my app, they are good."
    );
  } else {
    alert("Not good man");
  }
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    alert("Lol");
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <PaperProvider>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>
          </ThemeProvider>
        </PaperProvider>
      </ReduxProvider>
    );
  }
}
