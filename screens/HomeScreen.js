import React from "react";
import { SafeAreaView, View, TouchableOpacity, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import AddQuote from "../components/AddQuote";
import Header from "../components/Header";
import Sentiment from "sentiment";

import { Text, Card, Icon } from 'react-native-elements';

function HomeScreen() {
  const url = "https://type.fit/api/quotes";

  const sentiment = new Sentiment();
  const string = sentiment.analyze("What a lovely day!");
  console.log(string.score);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-16 bg-red-100`}>
        <Header title="Quotes of the Day" />
      </View>
      <Text>Your Sentiment Score is : {string.score}</Text>
      

      <View style={styles.container}>
        <Card containerStyle={{ marginTop: 15, padding: 20 }}>
          <Text style={styles.fonts} h1>
            A very random quote
          </Text>
          <Text style={styles.fonts}>random author</Text>
          <Card.Divider />
        </Card>
      </View>

      <AddQuote />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 15,
    textAlign: 'center',
  }
});

export default HomeScreen;
