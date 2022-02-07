import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import AddQuote from "../components/AddQuote";
import Header from "../components/Header";
import CardQuote from "../components/CardQuote";

function HomeScreen() {
  const url = "https://type.fit/api/quotes";
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setQuotes(data);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const renderQuote = ({ item: { text, author } }) => {
    return (
      <CardQuote
        style={styles.container}
        quote={text}
        author={author}
        sentimentValue={text}
      />
    );
  };

  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>
      <View style={tw`p-16 bg-gray-100`}>
        <Header title="Quotes of the Day" />
      </View>

      {/* Flatlist better than ScrollView in terms of performance
        as it loads lazily
      */}
      <FlatList
        data={quotes}
        renderItem={renderQuote}
        keyExtractor={(quote, index) => index.toString()}
      />

      <AddQuote />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
