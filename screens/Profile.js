import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#ededed",
            width: "100%",
            marginHorizontal: 50,
            borderRadius: 10,
            elevation: 7,
            paddingHorizontal: 10,
            paddingVertical: 30,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 50,
              borderWidth: 0.4,
              padding: 10,
            }}
          >
            <Ionicons name="person" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> Name: </Text>
            <Text style={{ fontSize: 16, fontWeight: "300" }}>
              {" "}
              Museven Choonya{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 50,
              borderWidth: 0.4,
              padding: 10,
            }}
          >
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> Email: </Text>
            <Text style={{ fontSize: 16, fontWeight: "300" }}>
              {" "}
              cmuseven@gmail.com{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 50,
              borderWidth: 0.4,
              padding: 10,
            }}
          >
            <Entypo name="phone" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> Phone: </Text>
            <Text style={{ fontSize: 16, fontWeight: "300" }}>
              {" "}
              +260987656623{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 50,
              borderWidth: 0.4,
              padding: 10,
            }}
          >
            <Ionicons name="person" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> Name: </Text>
            <Text style={{ fontSize: 16, fontWeight: "300" }}> Name: </Text>
          </View>
        </View>
      </View>

      <Text style={{ bottom: -220 }}>Version 1.0</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    alignItems: "center",
  },
});
