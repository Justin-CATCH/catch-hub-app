import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ThemeProvider } from "dripsy";
import { theme } from "./theme";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { store, doSomething } from "./store";

const materialTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: theme.colors.secondary,
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <PaperProvider theme={materialTheme}>
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
