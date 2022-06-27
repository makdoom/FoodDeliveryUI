import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Foundation from "react-native-vector-icons/Foundation";
import colors from "../assets/colors/colors";

const PopularCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Foundation name="crown" size={20} style={styles.icon} />
        <Text style={styles.headerTitle}>Top of the week</Text>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.cardLeft}>
          <Text style={styles.dishTitle}>{item.title}</Text>
          <Text style={styles.dishSubtitle}>Weight {item.weight}</Text>
        </View>
        <Image
          source={item.image}
          style={styles.dishImage}
          resizeMode="cover"
        />
      </View>

      <View></View>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "#bbb",
  },
  cardHeader: {
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    color: colors.primary,
    marginRight: 10,
  },
  headerTitle: {
    fontFamily: "PoppinsSemiBold",
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  dishImage: {
    height: 125,
    width: 215,
    resizeMode: "contain",
  },
  cardLeft: {
    paddingLeft: 20,
  },
  dishTitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 17,
  },
  dishSubtitle: {
    fontFamily: "PoppinsRegular",
    color: "gray",
  },
});
