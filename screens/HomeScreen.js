import React,{useState, useEffect} from "react";
import { SafeAreaView, View, TouchableOpacity, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import AddQuote from "../components/AddQuote";
import Header from "../components/Header";
import Sentiment from "sentiment";
import CardQuote from "../components/CardQuote";


function HomeScreen() {
  // const url = "https://type.fit/api/quotes";
  const url2= "https://favqs.com/api/qotd"

  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const sentiment = new Sentiment();
  const analysis = sentiment.analyze(quote);
  //console.log(string);

  const getQuotes = async () =>{
    const res = await fetch(url2);
    const data =  await res.json();
    setQuote(data.quote.body);
    setAuthor(data.quote.author)
    //console.log(data);
  }

  useEffect(()=>{
    getQuotes();
  },[]);

  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>
      <View style={tw`p-16 bg-gray-100`}>
        <Header title="Quotes of the Day" />
      </View>
      

     <CardQuote style={styles.container} quote={quote} author={author} sentimentValue={analysis.score} />

      <AddQuote  />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent:'center'
  }
});