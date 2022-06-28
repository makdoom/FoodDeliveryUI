import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Foundation, Entypo, MaterialIcons } from "react-native-vector-icons";
import colors from "../assets/colors/colors";

const PopularCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { item })}>
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

        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.addBtn}>
            <MaterialIcons name="add" size={24} style={styles.btnIcon} />
          </TouchableOpacity>
          <View style={styles.rating}>
            <Entypo
              name="star"
              style={{ marginRight: 4, color: "gray" }}
              size={15}
            />
            <Text style={styles.ratingText}>5.0</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 20,
    elevation: 15,
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
    marginLeft: 30,
  },
  cardLeft: {
    paddingLeft: 20,
  },
  dishTitle: {
    fontFamily: "PoppinsMedium",
    fontSize: 16,
  },
  dishSubtitle: {
    fontFamily: "PoppinsRegular",
    color: "gray",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rating: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "gray",
    fontFamily: "PoppinsMedium",
    marginTop: 3,
  },
});
