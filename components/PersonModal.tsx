import React from "react";
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
} from "react-native-paper";
import { Linking } from "react-native";
import faker from "faker";

export const PersonModal: React.FC<{
  visible: boolean;
  hideModal: () => void;
  modalPerson?: Person;
}> = ({ visible, hideModal, modalPerson }) => {
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
      </Modal>
    </Portal>
  );
};
