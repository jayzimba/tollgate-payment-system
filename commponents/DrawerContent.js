import React from "react";
import { StyleSheet, Text, View, Button, Share } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/Theme.js/colors";

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.DrawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginStart: 10 }}>
                <Text style={{ color: "white" }}>{"customer[0].name"}</Text>
                <Text style={{ color: "white" }}>{"customer[0].email"}</Text>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={(color, size) => (
                <Ionicons name="ios-home-outline" size={22} color="black" />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Ionicons name="person-outline" color={color} size={22} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <MaterialCommunityIcons
                  name="history"
                  color={color}
                  size={22}
                />
              )}
              label="History"
              onPress={() => {
                props.navigation.navigate("History");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <MaterialCommunityIcons
                  name="cash-plus"
                  size={22}
                  color={color}
                />
              )}
              label="Deposit"
              onPress={() => {
                props.navigation.navigate("Deposit");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="help-circle-outline" color={color} size={22} />
              )}
              label="FAQ"
              onPress={() => {
                props.navigation.navigate("FAQ");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(color, size) => (
            <Icon name="exit-to-app" color={color} size={22} />
          )}
          label="Sign Out"
          onPress={() => console.log("logging out")}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  DrawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    backgroundColor: colors.primary,
    height: 130,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
    color: "white",
  },
  caption2: {
    fontSize: 12,
    lineHeight: 14,
    color: "white",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
  },
  rdrawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  badge: {
    backgroundColor: "#EE3855",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: "absolute",
    top: -2,
    right: -7,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});

export default DrawerContent;
