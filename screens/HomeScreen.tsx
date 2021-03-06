import React, { useState, useMemo, useRef } from "react";
import {
  Card,
  Avatar,
  Headline,
  TouchableRipple,
  Button,
} from "react-native-paper";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../theme";
import { ScrollView, Flex, Box, Text, View } from "dripsy";
import { useDispatch } from "react-redux";
import { doSomething } from "../store";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import SwipeCards from "../components/SwipeCard";
import ConfettiCannon from "react-native-confetti-cannon";
import { PersonModal } from "../components/PersonModal";
import { TasksModal } from "../components/TasksModal";
import { renderPeopleRow } from "./PeopleScreen";
import { Person } from "../types";
import { ONBOARDING_MOCK_DATA } from "../mock-data";
import { Notifications } from "expo";

function shuffleArray(array: any[]): any[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export default function HomeScreen() {
  // People
  const [people, loading] = useCollection(dbInstance.collection("people"));
  const peopleData = useMemo(
    () => shuffleArray(people?.docs?.map((doc) => doc.data()) || []),
    [people]
  );
  const [personModal, setPersonModal] = React.useState(false);
  const showPersonModal = () => setPersonModal(true);
  const hidePersonModal = () => setPersonModal(false);
  const [modalPerson, setModalPerson] = useState<Person | undefined>(undefined);

  // Tasks
  const [progress, setProgress] = useState(0);
  const [taskModal, setTaskModal] = React.useState(false);
  const showTaskModal = () => setTaskModal(true);
  const hideTaskModal = () => setTaskModal(false);
  const [tasks, setTasks] = useState<any[]>([]);

  // Cannon
  const cannon = useRef(null);

  return (
    <>
      <PersonModal
        modalPerson={modalPerson}
        hideModal={hidePersonModal}
        visible={personModal}
      />
      <TasksModal
        tasks={tasks}
        hideModal={() => {
          hideTaskModal();
          setProgress(20);
          cannon?.current.start();
        }}
        visible={taskModal}
      />
      <ScrollView
        scrollEnabled={true}
        disableScrollViewPanResponder={true}
        sx={{
          backgroundColor: theme.colors.backgroundColor,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 10,
        }}
      >
        <Headline
          style={{
            marginTop: 40,
          }}
        >
          G'day Batman
        </Headline>

        <Text
          sx={{
            marginTop: 10,
            marginBottom: 2,
            fontWeight: "500",
          }}
        >
          Your onboarding progress
        </Text>
        <Flex>
          <SwipeCards
            cards={ONBOARDING_MOCK_DATA.frontend.days}
            yupText={"👍"}
            nopeText={"⏭"}
            containerStyle={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
            cardStyle={{
              width: "100%",
            }}
            renderCard={(day) =>
              renderDayCard({ day, showTaskModal, setTasks, progress })
            }
          />
        </Flex>

        <Text
          sx={{
            marginTop: 15,
            fontWeight: "500",
          }}
        >
          Topic of the day
        </Text>

        {renderTopicOfTheDay()}
        <Text
          sx={{
            marginTop: 15,
            fontWeight: "500",
          }}
        >
          Meet someone today
        </Text>
        <Flex>
          <SwipeCards
            cards={peopleData}
            yupText={"👍"}
            nopeText={"😱"}
            containerStyle={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
            cardStyle={{
              width: "100%",
            }}
            renderCard={(person) =>
              renderPeopleRow(person, showPersonModal, setModalPerson)
            }
          />
        </Flex>
      </ScrollView>

      <ConfettiCannon
        count={150}
        origin={{ x: -10, y: 0 }}
        ref={cannon}
        explosionSpeed={500}
        autoStart={false}
      />
    </>
  );
}

function renderTopicOfTheDay() {
  function onPressHandler() {}
  return (
    <TouchableRipple onPress={onPressHandler}>
      <Card
        elevation={2}
        style={{
          width: "100%",
          marginTop: 10,
        }}
      >
        <TouchableRipple onPress={() => {}}>
          <Card.Content
            style={{
              padding: 10,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Avatar.Image size={80} source={require("../icons/security.png")} />
            <Flex
              sx={{
                flexBasis: 200,
                flexDirection: "column",
                pl: 15,
                flexGrow: 2,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Security
              </Text>
              <Text>
                Security takes absolute priority at Catch, and we must be
                exceptionally diligent to protect our customer's private
                information and defend against malicious attacks on our code and
                infrastructure.
              </Text>
            </Flex>
          </Card.Content>
        </TouchableRipple>
        <Card.Actions style={{ justifyContent: "flex-end" }}>
          <Button onPress={onPressHandler}>Learn more</Button>
        </Card.Actions>
      </Card>
    </TouchableRipple>
  );
}

function renderDayCard({ day, showTaskModal, setTasks, progress }) {
  function onPressHandler() {
    setTasks(day.tasks);
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
                  <Text sx={{ fontWeight: "600", fontSize: 3 }}>{`${Math.round(
                    fill
                  )}%`}</Text>
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
