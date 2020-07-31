import React from "react";
import { Person } from "../types";
import { Flex, Box, ScrollView, H1, H2, H3, H4, H5, H6 } from "dripsy";
import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  Portal,
  Card,
  Text,
  Avatar,
  TouchableRipple,
  Button,
  Divider,
} from "react-native-paper";
import { Linking } from "react-native";
import faker from "faker";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../theme";
import { TasksModal } from "../components/TasksModal";

const DAY = {
  id: 1,
  description: `Welcome to your first day at Catch! We hope that this will be both a pleasant and exciting place to work. Today we'll focus on meeting everyone and getting your computer ready:`,
  tasks: [
    { id: 1, text: "Set up your local machine" },
    { id: 2, text: "Meet some the people you will be working with" },
    {
      id: 3,
      text:
        "Check out the cafe and challenge someone to a game of table tennis",
    },
  ],
};

export default function MeScreen() {
  const [taskModal, setTaskModal] = React.useState(false);
  const showTaskModal = () => setTaskModal(true);
  const hideTaskModal = () => setTaskModal(false);

  function renderDayCard({ day, progress }) {
    function onPressHandler() {
      showTaskModal();
    }

    return (
      <Card
        style={{
          width: "100%",
        }}
      >
        <TouchableRipple onPress={onPressHandler}>
          <Card.Content
            style={{
              padding: 10,
            }}
          >
            <Card.Title
              sx={{
                fontWeight: "500",
              }}
              title="Your onboarding progress"
            />
            <Flex>
              <Flex
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <AnimatedCircularProgress
                  size={120}
                  width={15}
                  backgroundWidth={4}
                  fill={progress}
                  tintColor={theme.colors.primaryLight}
                  tintColorSecondary={theme.colors.primary}
                  backgroundColor={theme.colors.tertiary}
                  arcSweepAngle={240}
                  rotation={240}
                  lineCap="round"
                >
                  {(fill) => (
                    <Text
                      sx={{ fontWeight: "600", fontSize: 3 }}
                    >{`${Math.round(fill)}%`}</Text>
                  )}
                </AnimatedCircularProgress>
                <Text
                  sx={{
                    fontWeight: "bold",
                    fontSize: 3,
                  }}
                >
                  {`Day ${day.id}`}
                </Text>
                <Text
                  sx={{
                    marginTop: 1,
                    fontWeight: "300",
                  }}
                >
                  {day.description}
                </Text>
              </Flex>
            </Flex>
          </Card.Content>
        </TouchableRipple>
        <Card.Actions style={{ justifyContent: "flex-end" }}>
          <Button onPress={onPressHandler}>View Tasks</Button>
        </Card.Actions>
      </Card>
    );
  }

  const modalPerson: Person = {
    askAbout: "Talk about cats",
    bio:
      "Leeroy Jenkins is the name of a player character created by Ben Schulz in Blizzard Entertainment's MMORPG World of Warcraft. The character became popular in 2005 from his role in a viral video of game footage where, having been absent during his group's discussion of a meticulous plan, Leeroy returns and ruins it by charging straight into combat shouting his own name. The character became an Internet meme.",
    birthday: "25",
    email: "leeroy.jenkins@gmail.com",
    github: "leeroyperson",
    joined: "25",
    name: "Leeroy Jenkins",
    photo: "",
    role: "Feeder",
    slack: "@leeroy",
  };

  return (
    <React.Fragment>
      <TasksModal
        tasks={DAY.tasks}
        hideModal={() => {
          hideTaskModal();
        }}
        visible={taskModal}
      />

      <ScrollView>
        <Card style={styles.container}>
          <Card.Title
            title={modalPerson?.name}
            titleStyle={{
              textAlign: "center",
            }}
          />
          <Card.Content>
            <Flex
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar.Image
                size={80}
                source={{
                  uri: modalPerson?.photo || faker.image.avatar(),
                }}
              />
              <Box>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Bio
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                  }}
                >
                  {modalPerson?.bio}
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Breaking the ice
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                  }}
                >
                  {modalPerson?.askAbout}
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </Text>
                <Box>
                  {modalPerson?.email && (
                    <TouchableRipple
                      style={{ marginTop: 5 }}
                      rippleColor="rgba(0, 0, 0, .32)"
                      onPress={() =>
                        Linking.openURL(`mailto:${modalPerson?.email}`)
                      }
                    >
                      <Flex style={{ alignItems: "center" }}>
                        <Ionicons name="ios-mail" size={20} />
                        <Text style={{ marginLeft: 5 }}>
                          {modalPerson?.email || ""}
                        </Text>
                      </Flex>
                    </TouchableRipple>
                  )}
                  {modalPerson?.slack && (
                    <TouchableRipple
                      style={{ marginTop: 5 }}
                      rippleColor="rgba(0, 0, 0, .32)"
                      onPress={() => Linking.openURL("slack://open")}
                    >
                      <Flex style={{ alignItems: "center" }}>
                        <Ionicons name="logo-slack" size={20} />
                        <Text style={{ marginLeft: 5 }}>
                          {modalPerson?.slack || ""}
                        </Text>
                      </Flex>
                    </TouchableRipple>
                  )}
                  {modalPerson?.github && (
                    <TouchableRipple
                      style={{ marginTop: 5 }}
                      rippleColor="rgba(0, 0, 0, .32)"
                      onPress={() =>
                        Linking.openURL(
                          `https://github.com/${modalPerson.github}`
                        )
                      }
                    >
                      <Flex style={{ alignItems: "center" }}>
                        <Ionicons name="logo-github" size={20} />
                        <Text style={{ marginLeft: 5 }}>
                          {modalPerson?.github || ""}
                        </Text>
                      </Flex>
                    </TouchableRipple>
                  )}
                </Box>
              </Box>
            </Flex>
          </Card.Content>
        </Card>

        <View style={{ marginTop: 20 }} />

        {renderDayCard({
          day: DAY,
          progress: 72,
        })}
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
