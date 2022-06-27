import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors/colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/images/profile.png")}
            resizeMode="contain"
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
});
