import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors/colors";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import Popular from "../components/Popular";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <Image
              source={require("../assets/images/profile.png")}
              resizeMode="contain"
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} />
          </View>

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.subtitle}>Food</Text>
            <Text style={styles.title}>Delivery</Text>
          </View>

          {/* Searchbar */}
          <Searchbar />

          {/* Categories */}
          <Categories />

          {/* Popular section */}
          <Popular navigation={navigation} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  titleContainer: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "PoppinsRegular",
    fontWeight: "300",
    color: colors.textDark,
  },
  title: {
    fontSize: 28,
    fontFamily: "PoppinsBold",
  },
});
