import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import Sentiment from "./Sentiment"

function CardQuote(props) {
  return (
    <View style={styles.container}>
      <Card containerStyle={{ marginTop: 15, padding: 20 }}>
        <Text style={styles.fonts} h1>
          {props.quote}
        </Text>
        <Text style={styles.fonts}>- {props.author}</Text>
        <Card.Divider />
        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity>
            <Icon name="heart" type="font-awesome" color="#000" />
          </TouchableOpacity>
          <Sentiment sentimentValue={props.sentimentValue} />
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
