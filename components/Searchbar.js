import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

const Searchbar = () => {
  return (
    <View style={styles.searchbarContainer}>
      <Feather name="search" size={24} />
      <TextInput placeholder="Search Food" style={styles.searhInput} />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchbarContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    elevation: 10,
    elevation: 10,
    shadowColor: "#bbb",
  },
  searhInput: {
    marginLeft: 10,
    fontFamily: "PoppinsRegular",
    flex: 1,
  },
});
