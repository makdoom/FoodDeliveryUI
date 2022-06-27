import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import colors from "../colors/colors";

const CategoryCard = ({ item }) => {
  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: item.selected ? colors.primary : colors.white },
      ]}
    >
      <Image source={item.image} style={styles.dishImage} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: item.selected ? colors.white : colors.secondary },
        ]}
      >
        <Feather
          name="chevron-right"
          size={18}
          color={item.selected ? colors.black : colors.white}
        />
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 10,
    elevation: 10,
    shadowColor: "#bbb",
  },
  dishImage: {
    marginBottom: 14,
  },
  title: {
    fontFamily: "PoppinsMedium",
  },
  iconContainer: {
    marginTop: 20,
    padding: 6,
    borderRadius: 50,
  },
});
