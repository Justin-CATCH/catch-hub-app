import React, { useState } from "react";
import { ScrollView, Flex } from "dripsy";
import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  ActivityIndicator,
  Card,
  Avatar,
  Text,
  Searchbar,
  TouchableRipple,
  IconButton,
} from "react-native-paper";
import { useCollection } from "react-firebase-hooks/firestore";
import { dbInstance } from "../db";
import faker from "faker";
import { theme } from "../theme";
import { Person } from "../types";
import { PersonModal } from "../components/PersonModal";

export function renderPeopleRow(
  person: Person,
  showModal: (show: boolean) => void,
  setModalPerson: (person: Person) => void
) {
  return (
    <Card
      key={person.name}
      elevation={2}
      style={{
        width: "100%",
        marginTop: 10,
      }}
    >
      <TouchableRipple
        onPress={() => {
          showModal();
          setModalPerson(person);
        }}
      >
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
          >
            <Ionicons name="ios-eye" size={28} />
          </Button>
        </Card.Content>
      </TouchableRipple>
    </Card>
  );
}

export default function PeopleScreen() {
  const [people, loading] = useCollection(dbInstance.collection("people"));

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [modalPerson, setModalPerson] = useState<Person | undefined>(undefined);

  const [searchTerm, setSearchTerm] = useState("");

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
            {filteredPeopleData.map((person) =>
              renderPeopleRow(person, showModal, setModalPerson)
            )}
          </Flex>
        )}
      </ScrollView>
    </>
  );
}
