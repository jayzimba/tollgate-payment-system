import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Profile from "./Profile";
import History from "./History";
import Receipt from "./Receipt";
import Deposit from "./Deposit";
import colors from "./../assets/Theme.js/colors";
import DrawerContent from "./../commponents/DrawerContent";
import App from "./../App";

const Drawer = createDrawerNavigator();

export default function MainNav() {
  return (
    <PaperProvider>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          style={styles.container}
          screenOptions={{
            activeTintColor: "red",
            headerTransparent: false,
            headerTitleStyle: {
              color: "rgba(255,255,255,0.0)",
            },
            drawerItemStyle: {
              borderEndColor: "red",
            },
            drawerActiveTintColor: colors.primary,
            drawerActiveBackgroundColor: "#fff",
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="History" component={History} />
          <Drawer.Screen name="Receipt" component={Receipt} />
          <Drawer.Screen name="Deposit" component={Deposit} />
          <Drawer.Screen
            name="App"
            component={App}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
