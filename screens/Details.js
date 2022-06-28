import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import colors from "../assets/colors/colors";
import { FlatList } from "react-native-gesture-handler";

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.detailContainer}>
      <SafeAreaView>
        <View style={styles.detailHeader}>
          <TouchableOpacity
            style={[styles.backIcon, styles.iconBox]}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-thin-left" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBox, styles.favouriteIcon]}>
            <Entypo name="star" size={20} color={"white"} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailBody}>
          <Text style={styles.dishTitle}>{item?.title}</Text>
          <Text style={styles.price}>$ {item.price}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.left}>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Size</Text>
                <Text style={styles.title}>{item?.sizeName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Crust</Text>
                <Text style={styles.title}>{item?.crust}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.subtitle}>Delivery In</Text>
                <Text style={styles.title}>{item?.deliveryTime} mins</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Image source={item?.image} resizeMode="contain" />
            </View>
          </View>

          <View style={styles.ingredents}>
            <Text style={styles.ingredentsTitle}>Ingredients</Text>
            <FlatList
              data={item?.ingredients}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={({ item }) => (
                <View style={styles.ingredientContainer}>
                  <Image source={item?.image} style={styles.ingredentImage} />
                  <Text style={styles.name}>{item?.name}</Text>
                </View>
              )}
            />
          </View>

          <TouchableOpacity style={styles.orderBtn}>
            <Text style={styles.btnText}>Order</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: colors.background,
  },
  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  iconBox: {
    padding: 10,
    borderRadius: 12,
  },
  backIcon: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.textLight,
  },
  favouriteIcon: {
    backgroundColor: colors.primary,
  },
  detailBody: {
    marginTop: 40,
  },
  dishTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 30,
    letterSpacing: 1,
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 28,
    fontFamily: "PoppinsBold",
    color: colors.secondary,
    paddingHorizontal: 20,
  },
  infoContainer: {
    marginVertical: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    paddingLeft: 20,
  },
  row: {
    marginBottom: 18,
  },
  subtitle: {
    fontFamily: "PoppinsRegular",
    color: colors.textLight,
  },
  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 18,
  },
  right: {
    marginLeft: 40,
  },
  ingredents: {
    paddingHorizontal: 20,
  },
  ingredentsTitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
  },
  ingredientContainer: {
    backgroundColor: colors.white,
    marginRight: 15,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    elevation: 10,
    shadowColor: colors.textLight,
    marginBottom: 20,
  },
  ingredentImage: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
  name: {
    fontFamily: "PoppinsRegular",
  },
  orderBtn: {
    margin: 20,
    backgroundColor: colors.primary,
    flexDirection: "row",
    padding: 12,
    justifyContent: "center",
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "PoppinsSemiBold",
    letterSpacing: 1,
  },
});
