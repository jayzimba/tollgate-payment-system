import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";
import HistoryCard from "../commponents/HistoryCard";

const History = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "black",
          borderBottomWidth: 0.3,
          paddingBottom: 7,
          marginBottom: 40,
        }}
      >
        Transaction History
      </Text>

      <HistoryCard
        tollgate="Katuba"
        paymentMethod="app payment (airtel)"
        amount="20"
        date="22 Nov, 2023"
      />
      <HistoryCard
        tollgate="Kafulafuta"
        paymentMethod="app payment (MOMO)"
        amount="20"
        date="22 Nov, 2023"
      />

      <HistoryCard
        tollgate="Michale sata"
        paymentMethod="app payment (MOMO)"
        amount="30"
        date="22 Nov, 2023"
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
