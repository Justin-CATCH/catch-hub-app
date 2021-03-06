import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import * as React from "react";
import { Button } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import PeopleScreen from "../screens/PeopleScreen";
import LibraryScreen from "../screens/LibraryScreen";
import MeScreen from "../screens/MeScreen";
import { BottomTabParamList } from "../types";
import { theme } from "../theme";

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string; size: number }) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const PeopleStack = createStackNavigator();

function PeopleNavigator() {
  return (
    <PeopleStack.Navigator>
      <PeopleStack.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{
          headerTitle: "People",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </PeopleStack.Navigator>
  );
}

const LibraryStack = createStackNavigator();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          headerShown: false,
          headerTitle: "Library!!",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </LibraryStack.Navigator>
  );
}

const MeStack = createStackNavigator();

function MeNavigator() {
  return (
    <MeStack.Navigator>
      <MeStack.Screen
        name="MeScreen"
        component={MeScreen}
        options={{
          headerTitle: "Me",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </MeStack.Navigator>
  );
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: theme.colors.secondary }}
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="People"
        component={PeopleNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-people" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-book" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={MeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
