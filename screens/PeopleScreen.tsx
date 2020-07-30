import React, { useState } from "react";
import {
  View,
  FlatList,
  ScrollView,
  Container,
  Box,
  Flex,
  H4,
  A,
  H5,
} from "dripsy";
import { Image, StyleSheet } from "react-native";
import {
  Button,
  Card,
  Modal,
  Avatar,
  Text,
  Searchbar,
} from "react-native-paper";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import faker from "faker";
import styled from "styled-components/native";
import { theme } from "../theme";

type Person = {
  photo?: string;
  askAbout?: string;
  bio?: string;
  birthday?: string;
  email?: string;
  github?: string;
  joined?: string;
  name?: string;
  role?: string;
  slack?: string;
};

export default function PeopleScreen() {
  const [people, loading, error] = useCollection(
    dbInstance.collection("people")
  );

  const [showModal, setShowModal] = useState(false);

  function renderPeopleRow(person: Person) {
    return (
      <Card
        elevation={2}
        style={{
          width: "100%",
          marginTop: 10,
        }}
      >
        <Card.Content
          style={{
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
            onPress={() => setShowModal(true)}
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
      <Modal visible={true} onDismiss={() => setShowModal(false)}>
        <Text>Example Modal</Text>
      </Modal>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
