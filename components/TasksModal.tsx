import React, { useState } from "react";
import { Person } from "../types";
import { Flex, Box } from "dripsy";
import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  Portal,
  Card,
  Text,
  Avatar,
  TouchableRipple,
  Checkbox,
  Button,
} from "react-native-paper";
import { Linking } from "react-native";

export const TasksModal: React.FC<{
  visible: boolean;
  hideModal: () => void;
  tasks?: any[];
}> = ({ visible, hideModal, tasks }) => {
  const [currentTasks, setCurrentTasks] = useState(tasks || []);

  function toggleComplete(idx: number) {
    const mutatedTasks = [...currentTasks];
    mutatedTasks[idx].completed = !mutatedTasks[idx]?.completed;
    setCurrentTasks(mutatedTasks);
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          position: "absolute",
          margin: "auto",
          left: 20,
          right: 20,
        }}
      >
        <Card>
          <Card.Title
            title={"Today's tasks"}
            titleStyle={{
              textAlign: "center",
            }}
          />
          <Card.Content>
            {tasks?.map((task, idx) => (
              <TouchableRipple onPress={() => toggleComplete(idx)}>
                <Flex
                  sx={{
                    flexWrap: "wrap",
                    marginTop: 2,
                    alignContent: "baseline",
                  }}
                >
                  <Box>
                    <Checkbox.Android
                      status={
                        currentTasks[idx]?.completed ? "checked" : "unchecked"
                      }
                      onPress={() => toggleComplete(idx)}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginTop: 2,
                      flexGrow: 1,
                      flexBasis: 200,
                      textAlign: "justify",
                    }}
                  >
                    <Text
                      sx={{
                        pr: 2,
                      }}
                    >
                      {task.text}
                    </Text>
                  </Box>
                </Flex>
              </TouchableRipple>
            ))}
          </Card.Content>
          <Card.Actions
            style={{
              justifyContent: "flex-end",
            }}
          >
            <Button onPress={hideModal}>Got it!</Button>
          </Card.Actions>
        </Card>
      </Modal>
    </Portal>
  );
};
