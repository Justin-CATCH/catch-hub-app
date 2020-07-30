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
  Button,
} from "dripsy";
import { Image, TouchableOpacity, Modal } from "react-native";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import faker from "faker";

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
      <Flex
        sx={{
          width: ["100%", "50%", "33%"],
          marginTop: 10,
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
              marginTop: 1,
            }}
          >
            {person.role}
          </H5>
        </Flex>
        <Button
          sx={{
            flexGrow: 1,
            alignSelf: "flex-end",
          }}
          onPress={() => setShowModal(person)}
          title="Learn more"
        />
      </Flex>
    );
  }

  const peopleData = people?.docs?.map((doc) => doc.data()) || [];

  return (
    <>
      <View
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
      </View>
    </>
  );
}
