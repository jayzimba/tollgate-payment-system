import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/Theme.js/colors";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { Alert } from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    setLoading(true);
    var formData = new FormData();
    formData.append("username", selectedCity);
    formData.append("password", street);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    if (username == null || password == null) {
      Alert.alert(
        "Missing Fields",
        "Complete the form to process your request"
      );
    } else {
      fetch("https://www.pezabond.com/chonya/login.php", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result == "Logged in") {
            navigation.navigate("MainNav");
          } else {
            Alert.alert("Not Logged in", "you have provided wronf Credentials");
          }
        })
        .catch((error) => console.log("error", error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.bigText}>Zambia TollEasy</Text>
        <Text style={styles.smallText}>Be smart and pay smart</Text>
      </View>

      <View style={{ marginTop: 130, alignItems: "center" }}>
        <Text
          style={[
            styles.bigText,
            { fontSize: 25, marginBottom: 40, color: colors.gray },
          ]}
        >
          Login
        </Text>

        <View
          style={{
            width: "90%",
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 5,
            marginBottom: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            placeholder="Enter your email"
            selectionColor={colors.primary}
            style={{ marginStart: 10 }}
            onChangeText={(username) => setUsername(username)}
          />
        </View>

        <View
          style={{
            width: "90%",
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 5,
            marginBottom: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="form-textbox-password"
            size={24}
            color="black"
          />
          <TextInput
            placeholder="Password"
            selectionColor={colors.primary}
            style={{ marginStart: 10 }}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            marginBottom: 30,
          }}
          onPress={handleRequest}
        >
          <Text
            style={{
              color: colors.white,
              fontWeight: "bold",
            }}
          >
            Login in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{ marginBottom: 30 }}
        >
          <Text>Register Here</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator color={colors.primary} size="large" />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  bigText: {
    fontWeight: "bold",
    fontSize: 33,
    color: colors.primary,
  },
  smallText: {
    color: colors.gray,
  },
});
