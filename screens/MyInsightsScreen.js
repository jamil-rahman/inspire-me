import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import SavedCardQuote from "../components/SavedCardQuote";
import AsyncStorage from "@react-native-async-storage/async-storage";

function MyInsightsScreen() {
  const [savedquotes, setSavedQuotes] = useState([]);

  const renderQuote = ({ item: { myQuote, myAuthor } }) => {
    return (
      <SavedCardQuote
        style={styles.container}
        quote={myQuote}
        author={myAuthor}
        sentimentValue={myQuote}
      />
    );
  }; 

//get custom quotes from async storage with different key 'myquote'
  const getSavedQuotes = async () => {
    try {
      const quotes = await AsyncStorage.getItem("myquote");
      setSavedQuotes(JSON.parse(quotes));
    } catch (err) {
      console.log(err);
    }
  };

  //clear all data from async storage
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
    console.log("Done.");
  };

  useEffect(()=>{
    getSavedQuotes()
    //clearAll();
  }, [savedquotes])


  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>
      <View style={tw`p-16 bg-gray-100`}>
        <Header title="My Insights" />
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

export default MyInsightsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
