import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import React from "react";
import colors from "../assets/Theme.js/colors";
import HistoryCard from "../commponents/HistoryCard";
import { useState } from "react";
import { useEffect } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Entypo,
  Octicons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const History = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var formdata = new FormData();
    formdata.append("customerVehicle", 1);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    // Fetch data from the API
    fetch("https://www.pezabond.com/choonya/fetchHistory.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginBottom: 20 }}
      >
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
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

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.customer_id.toString()}
          renderItem={({ item }) => (
            <HistoryCard
              tollgate={item.tollgate_name}
              paymentMethod="method - Mobile money"
              amount={item.amount}
              date={item.date_created}
            />
          )}
        />
      )}
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
