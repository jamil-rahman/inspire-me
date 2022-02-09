import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  AlertIOS,
} from "react-native";
import { Text, Card, Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import SentimentComponent from "./SentimentComponent";
import Sentiment from "sentiment";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Snackbar does not work as Expo do not support snackbar

function CardQuote(props) {
  const sentiment = new Sentiment();
  const analysis = sentiment.analyze(props.quote);

  const notifyMessage = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(message);
    }
  };

  const saveQuote = async () => {
    const quote = { savedQuote: props.quote, savedAuthor: props.author };

    AsyncStorage.getItem("quote").then((favorites) => {
      favorites = favorites == null ? [] : JSON.parse(favorites);
      favorites.push(quote);
      notifyMessage('Quote Saved!');
      return AsyncStorage.setItem("quote", JSON.stringify(favorites));
    });
  };
  return (
    <View style={styles.container}>
      <Card
        containerStyle={{ marginTop: 15, padding: 20, borderRadius: 50 / 2 }}
      >
        <Text style={styles.fonts} h1>
          {props.quote}
        </Text>
        <Text style={styles.fonts}>- {props.author}</Text>
        <Card.Divider />
        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity onPress={saveQuote}>
            <Icon name="heart-outline" type="ionicon" />
          </TouchableOpacity>
          <SentimentComponent sentimentValue={analysis.score} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CardQuote;
