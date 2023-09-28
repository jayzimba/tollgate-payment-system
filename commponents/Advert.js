import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";

const Advert = () => {
  return (
    <View>
      <Text
        style={{
          color: colors.primary,
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Stay Smart
      </Text>
      <Text style={{ color: colors.secondary, textAlign: "justify" }}>
        The Road Development Authority ; is the premier highway authority in Sri
        Lanka and is responsible for the maintenance and development of the
        National Highway Network, comprising the trunk and main roa…
      </Text>

      <Image
        source={require("../images/advert.png")}
        style={{ marginVertical: 20 }}
      />
    </View>
  );
};

export default Advert;

const styles = StyleSheet.create({});
