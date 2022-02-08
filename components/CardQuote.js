import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import SentimentComponent from "./SentimentComponent";
import Sentiment from "sentiment";

function CardQuote(props) {
  const sentiment = new Sentiment();
  const analysis = sentiment.analyze(props.quote)

  return (
    <View style={styles.container}>
      <Card containerStyle={{ marginTop: 15, padding: 20, borderRadius: 50/2 }}>
        <Text style={styles.fonts} h1>
          {props.quote}
        </Text>
        <Text style={styles.fonts}>- {props.author}</Text>
        <Card.Divider />
        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity>
            <Icon name="heart" type="font-awesome" color="#000" />
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
