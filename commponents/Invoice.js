import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import SlideButton from "rn-slide-button";

const Invoice = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{ fontWeight: "bold", fontSize: 25, color: colors.primary }}
        >
          Toll-Gate Invoice
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, color: colors.black }}>
          TollGate
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: colors.black }}>
          Invoice #23
        </Text>
      </View>
      <Text
        style={{ fontWeight: "400", fontSize: 16, color: colors.secondary }}
      >
        Katuba Tollgate
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: colors.black }}>
          Plate Number
        </Text>
        <Text
          style={{ fontWeight: "400", fontSize: 16, color: colors.secondary }}
        >
          ABC 2034
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: colors.black }}>
          Vehicle Category
        </Text>
        <Text
          style={{ fontWeight: "400", fontSize: 16, color: colors.secondary }}
        >
          Bus
        </Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <View>
          <Text
            style={{ fontWeight: "bold", color: colors.primary, fontSize: 22 }}
          >
            ZMW 50
          </Text>
          <Text style={{ color: colors.secondary, fontSize: 14 }}>
            22nd Sept, 2023
          </Text>
        </View>
      </View>

      <SlideButton
        title={<Text style={{ fontSize: 16 }}>Slide to Pay</Text>}
        animation={true}
        icon={
          <FontAwesome5 name="arrow-right" size={24} color={colors.primary} />
        }
        containerStyle={{
          backgroundColor: colors.primary,
          fontSize: 22,
        }}
        underlayStyle={{
          backgroundColor: colors.primary,
        }}
        thumbStyle={{
          backgroundColor: "white",
        }}
        onSlideEnd={() =>
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        }
        onReachedToEnd={props.pay}
        reverseSlideEnabled={true}
        animationDuration={150}
        autoReset
      />
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgray,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
