import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import popularData from "../assets/data/popularData";
import PopularCard from "./PopularCard";

const Popular = () => {
  return (
    <View style={styles.populartItemContainer}>
      <Text style={styles.title}>Popular</Text>

      <FlatList
        data={popularData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PopularCard item={item} />}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  populartItemContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
  },
});
