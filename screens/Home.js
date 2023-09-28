import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import colors from "../assets/Theme.js/colors";
import Invoice from "../commponents/Invoice";
import Advert from "../commponents/Advert";
import * as Animatable from "react-native-animatable";

const Home = () => {
  const [balance, setBalance] = useState(150);
  const [isAdVisible, setIsAdVisible] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [isImageAnimated, setIsImageAnimated] = useState(false);

  const payNow = (amount) => {
    if (balance < amount) {
      Alert.alert(
        "Insufficient Balance",
        "you have insuffiencient balance in your smart account"
      );
    } else {
      setBalance(balance - amount);
      setPaymentSuccessful(true);
      setIsAdVisible(true);
      setIsImageAnimated(true);
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 50,
          }}
        >
          <Animatable.Image
            animation={isImageAnimated ? "rotate" : null}
            duration={2000}
            source={require("../images/circle.png")}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: colors.primary,
              }}
            >
              ZMW
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 65 }}>{balance}</Text>
            <Text style={{ fontWeight: "500", fontSize: 22 }}>Balance</Text>
          </View>
        </View>

        <Text
          style={{
            color: colors.secondary,
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Last Transaction
        </Text>

        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            paddingVertical: 5,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            shadowColor: colors.black,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            shadowOpacity: 0.4,
            elevation: 4,
            borderRadius: 0.2,
            marginVertical: 20,
          }}
        >
          <Image source={require("../images/airtel.png")} />
          <Text
            style={{ color: colors.black, fontSize: 20, fontWeight: "bold" }}
          >
            Deposit
          </Text>

          <View style={{ marginEnd: 10 }}>
            <Text style={{ color: colors.black, fontWeight: "500" }}>
              ZMW 230
            </Text>
            <Text style={{ color: colors.secondary }}>22nd Sept, 2023</Text>
          </View>
        </View>

        {/* invoice or advert area */}

        {isAdVisible ? <Advert /> : <Invoice pay={() => payNow(50)} />}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 40,
    paddingHorizontal: 15,
  },
});
