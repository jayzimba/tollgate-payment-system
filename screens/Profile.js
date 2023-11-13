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
