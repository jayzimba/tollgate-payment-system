import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../assets/Theme.js/colors";
import Invoice from "../commponents/Invoice";
import Advert from "../commponents/Advert";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import HistoryCard from "../commponents/HistoryCard";

const Home = ({ navigation }) => {
  const customerData = useSelector((state) => state.customer);

  const [balance, setBalance] = useState(0);
  const [customerId, setCustomerId] = useState(customerData.id);
  const [isAdVisible, setIsAdVisible] = useState(true);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [isImageAnimated, setIsImageAnimated] = useState(false);
  const [customer, setCustomer] = useState([]);
  const [invoices, setInvoice] = useState([]);
  const [history, sethistory] = useState([]);

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

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("customerID", customerId);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    // Fetch data from the API
    fetch(
      "https://www.pezabond.com/choonya/fetchLastInvoice.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result != null) {
          sethistory(result[0]);
          console.log(history);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var balance_data = customerData.account_balance;
    setBalance(balance_data);
    var formdata = new FormData();
    formdata.append("customerID", customerId);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    // Fetch data from the API
    fetch("https://www.pezabond.com/choonya/fetchInvoice.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result != null) {
          setInvoice(result[0]);
          setIsAdVisible(false);
          console.log(invoice);
        } else {
          setIsAdVisible(true);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("customerID", customerId);

    var requestOptions2 = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    // Fetch data from the API
    fetch("https://www.pezabond.com/2/fetchCustomer.php", requestOptions2)
      .then((response) => response.json())
      .then((result) => {
        setCustomer(result[0]);
      })
      .catch((error) => console.log("error", error));
  }, []);

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

        {history == null ? null : (
          <>
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
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <HistoryCard
                tollgate={history.tollgate_name}
                paymentMethod="Mobile App"
                amount={history.amount}
                date={history.date_created}
              />
            </TouchableOpacity>
          </>
        )}

        {/* invoice or advert area */}

        {isAdVisible ? (
          <Advert />
        ) : (
          <Invoice
            pay={() => payNow(parseFloat(invoices.amount))}
            amount={invoices.amount}
            tollgate_name={invoices.tollgate_name}
            invoice_id={invoices.invoice_id}
            vehicle_type_name={invoices.vehicle_type_name}
            date_created={invoices.date_created}
            plate_number={invoices.plate_number}
          />
        )}
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
