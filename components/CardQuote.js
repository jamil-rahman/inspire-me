import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Icon } from "react-native-elements";
// import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import SentimentComponent from "./SentimentComponent";
import Sentiment from "sentiment";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Snackbar does not work as Expo do not support snackbar

function CardQuote(props) {
  const sentiment = new Sentiment();
  const analysis = sentiment.analyze(props.quote);

  const saveQuote = async () => {
    const quote = [{ savedQuote: props.quote, savedAuthor: props.author }];

    try {
      await AsyncStorage.setItem("quote", JSON.stringify(quote));
      // await AsyncStorage.setItem("author", JSON.stringify(author));

      console.log(quote);
      //console.log(author);
    } catch (err) {
      console.log(err);
    }
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
