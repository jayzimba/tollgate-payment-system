import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/Theme.js/colors";
import { TextInput } from "react-native-gesture-handler";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Feather,
  AntDesign,
  Entypo,
  Octicons,
} from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.bigText}>Zambia TollEasy</Text>
        <Text style={styles.smallText}>Be smart and pay smart</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", paddingBottom: 50 }}>
          <Text
            style={[
              styles.bigText,
              { fontSize: 25, marginBottom: 40, color: colors.gray },
            ]}
          >
            Register Now
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
              placeholder="Enter your full name"
              selectionColor={colors.primary}
              style={{ marginStart: 10 }}
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
            <Entypo name="email" size={24} color="black" />
            <TextInput
              placeholder="Enter your email"
              selectionColor={colors.primary}
              style={{ marginStart: 10 }}
              keyboardType="email-address"
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
            <Entypo name="phone" size={24} color="black" />
            <TextInput
              placeholder="Contact"
              keyboardType="number-pad"
              selectionColor={colors.primary}
              style={{ marginStart: 10 }}
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
            <FontAwesome5 name="car" size={24} color="black" />
            <TextInput
              placeholder="Vehicle Model"
              selectionColor={colors.primary}
              style={{ marginStart: 10 }}
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
            <Octicons name="number" size={24} color="black" />
            <TextInput
              placeholder="Enter car Reg number"
              selectionColor={colors.primary}
              style={{ marginStart: 10 }}
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
            <FontAwesome5 name="car" size={24} color="black" />
            <TextInput
              placeholder="Vehicle type"
              selectionColor={colors.primary}
              style={{ marginStart: 10 }}
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
              placeholder="Password"
              fontSize={16}
              marginHorizontal={10}
              maxLength={12}
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              selectionColor={colors.primary}
              secureTextEntry={true}
              width={100}
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
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Proceed to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    paddingBottom: 5,
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
