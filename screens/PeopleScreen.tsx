import React, { useState } from "react";
import { ScrollView, Flex } from "dripsy";
import {
  Button,
  ActivityIndicator,
  Card,
  Avatar,
  Text,
  Searchbar,
} from "react-native-paper";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import faker from "faker";
import { theme } from "../theme";
import { Person } from "../types";
import { PersonModal } from "../components/PersonModal";

export default function PeopleScreen() {
  const [people, loading] = useCollection(dbInstance.collection("people"));

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [modalPerson, setModalPerson] = useState<Person | undefined>(undefined);

  const [searchTerm, setSearchTerm] = useState("");

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
  const filteredPeopleData = searchTerm
    ? peopleData.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : peopleData;

  return (
    <>
      <PersonModal
        visible={visible}
        hideModal={hideModal}
        modalPerson={modalPerson}
      />
      <ScrollView
        sx={{
          backgroundColor: theme.colors.backgroundColor,
          display: "flex",
          flex: 1,
          px: 15,
        }}
      >
        <Searchbar
          placeholder="Search by name"
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={{ marginTop: 10 }}
        />
        {loading ? (
          <Flex
            sx={{
              marginTop: 15,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <ActivityIndicator />
            <Text>Loading...</Text>
          </Flex>
        ) : (
          <Flex
            sx={{
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {filteredPeopleData.map(renderPeopleRow)}
          </Flex>
        )}
      </ScrollView>
    </>
  );
}
