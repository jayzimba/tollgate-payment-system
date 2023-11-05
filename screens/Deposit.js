import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../assets/Theme.js/colors";
import React from "react";
import { PayWithFlutterwave } from "flutterwave-react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import an icon library of your choice
import { TextInput } from "react-native-gesture-handler";
import { Ionicons, Entypo } from "@expo/vector-icons";

const DepositView = ({ item, onPress, isPressed }) => {
  const backgroundColor = isPressed ? colors.secondary : colors.light; // Change the color when pressed
  const color = isPressed ? colors.white : colors.secondary; // Change the color when pressed

  return (
    <TouchableOpacity
      style={[styles.square, { backgroundColor }]}
      onPress={() => {
        onPress(item.text);
      }}
    >
      <Text style={[styles.text, { color }]}>{item.text}</Text>
    </TouchableOpacity>
  );
};
interface RedirectParams {
  status: "successful" | "cancelled";
  transaction_id?: string;
  tx_ref: string;
}
const Deposit = () => {
  const [DepositAmount, setDepositAmount] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const dataArray = [
    { text: "20" },
    { text: "40" },
    { text: "50" },
    { text: "100" },
    { text: "200" },
  ];

  const handlePress = (text) => {
    setDepositAmount(text);
  };

  const handleOnRedirect = (data: RedirectParams) => {
    if (data.status == "cancelled") {
      Alert.alert(
        "Transaction Cancelled",
        "your transaction was incomplete try again later"
      );
    } else if (data.status == "successful") {
      HandleSubscribe();
    }
  };

  /* An example function to generate a random transaction reference */
  const generateTransactionRef = (length: number) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `flw_tx_ref_${result}`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "black",
          borderBottomWidth: 0.3,
          paddingBottom: 7,
          marginBottom: 20,
        }}
      >
        Deposit funds into your account
      </Text>

      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContent}
          showsHorizontalScrollIndicator={true}
        >
          {dataArray.map((item, index) => (
            <DepositView
              key={index}
              item={item}
              onPress={handlePress}
              isPressed={item.text === DepositAmount}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          width: "90%",
          height: 50,
          padding: 10,
          borderWidth: 0.5,
          borderColor: "gray",
          marginEnd: 20,
          borderRadius: 7,
        }}
      >
        <TextInput
          placeholder="Enter own amount"
          selectionColor={colors.primary}
          value={DepositAmount}
          style={{
            color: "black",
            fontSize: 16,
            fontWeight: "500",
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          height: 50,
          padding: 10,
          borderWidth: 0.5,
          borderColor: "gray",
          marginEnd: 20,
          borderRadius: 7,
          marginVertical: 20,
        }}
      >
        <View style={styles.line}></View>
        <Entypo
          name="phone"
          size={20}
          color="black"
          style={{ marginHorizontal: 5 }}
        />
        <Text style={{ marginLeft: 5 }}>+26</Text>
        <TextInput
          placeholder="Enter your mobile number"
          fontSize={16}
          maxLength={10}
          value={phone}
          selectionColor={colors.primary}
          marginHorizontal={10}
          returnKeyType="done"
          keyboardType="phone-pad"
          onChangeText={setPhone}
        />
      </View>

      <View style={{ marginEnd: 40 }}>
        <Text style={{ textAlign: "justify" }}>
          NOTE: a deposit prompt message will be sent to the number you
          provided, enter your mobile money pin to process your payment
        </Text>
      </View>

      <PayWithFlutterwave
        onRedirect={handleOnRedirect}
        options={{
          tx_ref: generateTransactionRef(10),
          authorization: "FLWPUBK-aa9cc71e514393d4bfc408610089dcf2-X",
          customer: {
            email: "cmuseven@gmail.com",
            phone_number: phone,
            name: "Choonya Museven",
          },
          amount: parseFloat(DepositAmount),
          currency: "ZMW",
          payment_options: "ussd, card",
        }}
        customButton={(props) => (
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 70,
              elevation: 5,
              width: "90%",
              height: 60,
              marginVertical: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={props.onPress}
            isBusy={props.isInitializing}
            disabled={false}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "#fff",
              }}
            >
              Deposit Now
            </Text>
          </TouchableOpacity>
        )}
      ></PayWithFlutterwave>
    </ScrollView>
  );
};

export default Deposit;
const squareSize = 40; // Adjust the size of the square views as needed

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingStart: 20,
  },
  scrollViewContent: {
    marginBottom: 15,
  },
  square: {
    width: squareSize,
    height: squareSize,
    backgroundColor: colors.light, // Change the background color as desired
    borderRadius: 5, // To make it a circle, set borderRadius to half the width/height
    margin: 10, // Adjust the margin as needed
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  text: {
    color: colors.primary, // Change the text color as desired
    fontSize: 16, // Adjust the font size as needed
    fontWeight: "bold",
  },
});
