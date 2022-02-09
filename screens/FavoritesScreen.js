import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text
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


//get favorite quotes from the homescreen
  const getSavedQuotes = async () => {
    try {
      const quotes = await AsyncStorage.getItem("quote");
        setSavedQuotes(JSON.parse(quotes)
    )} catch (err) {
      console.log(err);
    }
  };
  
  useEffect(()=>{
    getSavedQuotes()
    //clearAll();
  }, [savedquotes])



  const clearAll = async () => {
    try {
      await AsyncStorage.clear('quote')
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>


      <View style={tw`p-16 bg-gray-100`}>
        <Header title="Favorites" />
      </View>

      <FlatList
        data={savedquotes}
        renderItem={renderQuote}
        keyExtractor={(quote, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
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
