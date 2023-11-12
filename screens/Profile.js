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
  Octicons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  const customerData = useSelector((state) => state.customer);
  const [vehicle, setVehicle] = useState([]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("customerId", customerData.id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    // Fetch data from the API
    fetch(
      "https://www.pezabond.com/choonya/fetchVehicleData.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVehicle(result[0]);
        setIsAdVisible(false);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.container1}>
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
                {customerData.firistname} {customerData.lastname}
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
                {customerData.email}
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
                {customerData.phone}
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
              <Octicons name="number" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Number PLate:
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                {" "}
                {vehicle.plate_number}{" "}
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
              <FontAwesome5 name="car-alt" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Vehicle type:
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                {" "}
                {vehicle.name}{" "}
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
              <FontAwesome5 name="car-alt" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Vehicle Model:
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                {" "}
                {vehicle.model}{" "}
              </Text>
            </View>
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
    padding: 20,
  },
  container1: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
