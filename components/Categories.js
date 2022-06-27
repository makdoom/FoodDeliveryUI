import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import categoriesData from "../assets/data/categoriesData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.title}>Categories</Text>

      <View style={styles.categoriesListContainer}>
        <FlatList
          data={categoriesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryCard item={item} />}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: 25,
  },
  title: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
  },
  categoriesListContainer: {
    paddingVertical: 8,
  },
});
