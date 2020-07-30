import React, { useState } from "react";
import { ScrollView, Flex, Box } from "dripsy";
import { Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  Card,
  Modal,
  Avatar,
  Text,
  Searchbar,
  Portal,
  IconButton,
  TouchableRipple,
} from "react-native-paper";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import faker from "faker";

type Person = {
  name: string;
  bio: string;
  photo?: string;
  role?: string;
  askAbout?: string;
  email?: string;
  slack?: string;
  github?: string;
};

export default function PeopleScreen() {
  const [people, loading, error] = useCollection(
    dbInstance.collection("people")
  );

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [modalPerson, setModalPerson] = useState<Person | null>(null);

  function renderPeopleRow(person: Person) {
    return (
      <Card
        key={person.name}
        elevation={2}
        style={{
          width: "100%",
          marginTop: 10,
        }}
      >
        <Card.Content
          style={{
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Avatar.Image
            size={80}
            source={{
              uri: person.photo || faker.image.avatar(),
            }}
          />
          <Flex
            sx={{
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
              {person.name}
            </Text>
            <Text>{person.role}</Text>
          </Flex>
          <Button
            sx={{
              justifySelf: "center",
            }}
            onPress={() => {
              showModal();
              setModalPerson(person);
            }}
          >
            <Text>View</Text>
          </Button>
        </Card.Content>
      </Card>
    );
  }

  const peopleData = people?.docs?.map((doc) => doc.data()) || [];

  return (
    <>
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
      <ScrollView
        sx={{
          backgroundColor: "white",
          display: "flex",
          flex: 1,
          px: 15,
        }}
      >
        <Searchbar
          placeholder="Search by name"
          value=""
          style={{ marginTop: 10 }}
        />
        <Flex
          sx={{
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {peopleData.map(renderPeopleRow)}
        </Flex>
      </ScrollView>
    </>
  );
}
