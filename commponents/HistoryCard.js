import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";

const HistoryCard = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#ededee",
        borderRadius: 5,
        elevation: 5,
        flexDirection: "row",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          height: "100%",
          width: 5,
          backgroundColor: colors.primary,
          borderRadius: 5,
        }}
      ></View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginHorizontal: 10,
          overflow: "hidden",
          padding: 15,
        }}
      >
        <View>
          <Text style={{ color: colors.black, fontWeight: "500" }}>
            {props.tollgate} Toll gate
          </Text>
          <Text style={{ color: colors.black, fontWeight: "200" }}>
            {props.paymentMethod}
          </Text>
        </View>
        <View style={{ marginEnd: 10 }}>
          <Text style={{ color: colors.black, fontWeight: "500" }}>
            ZMW {props.amount}
          </Text>
          <Text style={{ color: colors.secondary }}>{props.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({});
