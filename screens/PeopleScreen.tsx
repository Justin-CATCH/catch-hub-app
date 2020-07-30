import React, { useState } from "react";
import {
  View,
  FlatList,
  ScrollView,
  Container,
  Box,
  Flex,
  H4,
  Text,
  A,
  H5,
} from "dripsy";
import { Image, StyleSheet } from "react-native";
import { Button, Card, Modal } from "react-native-paper";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import faker from "faker";
import styled from "styled-components/native";
import { theme } from "../theme";

type Person = {
  name: string;
  bio: string;
  photo?: string;
  role?: string;
};

export default function PeopleScreen() {
  const [people, loading, error] = useCollection(
    dbInstance.collection("people")
  );

  const [showModal, setShowModal] = useState(false);

  function renderPeopleRow(person: Person) {
    return (
      <Card
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            backgroundColor: "inactive",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              right: 0,
              top: 0,
              resizeMode: "contain",
            }}
            source={{
              uri: person.photo || faker.image.avatar(),
            }}
          />
        </Box>
        <Flex
          sx={{
            flexDirection: "column",
            pl: 10,
            flexGrow: 2,
          }}
        >
          <H4
            style={{
              margin: 0,
            }}
          >
            {person.name}
          </H4>
          <H5
            style={{
              marginTop: 0,
            }}
          >
            {person.role}
          </H5>
        </Flex>
        <Button
          sx={{
            alignSelf: "flex-end",
          }}
          onPress={() => setShowModal(person)}
        >
          <Text>View</Text>
        </Button>
      </Card>
    );
  }

  const peopleData = people?.docs?.map((doc) => doc.data()) || [];

  return (
    <>
      <Modal
        visible={showModal != false}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Button>
          </View>
        </View>
      </Modal>
      <ScrollView
        sx={{
          backgroundColor: "white",
          display: "flex",
          flex: 1,
          px: 15,
        }}
      >
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
