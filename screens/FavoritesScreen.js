import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import SavedCardQuote from "../components/SavedCardQuote";
import AsyncStorage from "@react-native-async-storage/async-storage";

function FavoritesScreen() {
  const [savedquotes, setSavedQuotes] = useState([]);

  const renderQuote = ({ item: { savedQuote, savedAuthor } }) => {
    return (
      <SavedCardQuote
        style={styles.container}
        quote={savedQuote}
        author={savedAuthor}
        sentimentValue={savedQuote}
      />
    );
  };

  const getSavedQuotes = async () => {
    try {
      const quotes = await AsyncStorage.getItem("quote");
      return quotes != null ? setSavedQuotes(JSON.parse(quotes)) : null;
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(()=>{
    getSavedQuotes()
  }, [])

  console.log(savedquotes);

  return (
    <SafeAreaView>


      <View style={tw`p-16 bg-gray-100`}>
        <Header title="Favorites" />
      </View>

      <FlatList
        data={savedquotes}
        renderItem={renderQuote}
        keyExtractor={(quote, index) => index.toString()}
      />


    </SafeAreaView>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
