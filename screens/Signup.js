import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../assets/Theme.js/colors";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      contact: "",
      vehicleModel: "",
      regNumber: "",
      vehicleType: "",
      password: "",
    };
  }

  handleSignUp = () => {
    this.setState({ loading: true });

    var fullName = this.state.fullName;
    var email = this.state.email;
    var contact = this.state.contact;
    var vehicleModel = this.state.vehicleModel;
    var regNumber = this.state.regNumber;
    var vehicleType = this.state.vehicleType;
    var password = this.state.password;

    if (
      fullName.length == 0 ||
      email.length == 0 ||
      contact.length == 0 ||
      vehicleModel.length == 0 ||
      regNumber.length == 0 ||
      vehicleType.length == 0 ||
      password.length == 0
    ) {
      alert("Required Field Is Missing!");
      this.setState({ loading: false });
    } else {
      var formdata = new FormData();
      formdata.append("fullName", fullName);
      formdata.append("email", email);
      formdata.append("contact", contact);
      formdata.append("vehicleModel", vehicleModel);
      formdata.append("regNumber", regNumber);
      formdata.append("vehicleType", vehicleType);
      formdata.append("password", password);

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("https://www.pezabond.com/choonya/signup.php", requestOptions)
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message);
          if (Response[0].Message == "Registered successfuly!") {
            this.props.navigation.navigate("Login");
          }
        })
        .catch((error) => {
          console.error("ERROR:" + error);
        })
        .finally(() =>
          this.setState({
            fullName: "",
            email: "",
            contact: "",
            vehicleModel: "",
            regNumber: "",
            vehicleType: "",
            password: "",
            loading: false,
          })
        );
    }
  };

  render() {
    const { navigation } = this.props;
    const {
      fullName,
      email,
      contact,
      vehicleModel,
      regNumber,
      vehicleType,
      password,
    } = this.state;

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
                value={fullName}
                onChangeText={(text) => this.setState({ fullName: text })}
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
                value={email}
                onChangeText={(text) => this.setState({ email: text })}
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
                value={contact}
                onChangeText={(text) => this.setState({ contact: text })}
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
                value={vehicleModel}
                onChangeText={(text) => this.setState({ vehicleModel: text })}
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
                value={regNumber}
                onChangeText={(text) => this.setState({ regNumber: text })}
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
                value={vehicleType}
                onChangeText={(text) => this.setState({ vehicleType: text })}
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
                value={password}
                onChangeText={(text) => this.setState({ password: text })}
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
              onPress={this.handleSignUp}
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
  }
}

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
  input: {
    width: "90%",
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  signupButton: {
    backgroundColor: colors.primary,
    padding: 10,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30,
  },
  signupButtonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default Signup;
