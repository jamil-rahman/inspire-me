import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import AddQuote from '../components/AddQuote';
import Header from '../components/Header';

function HomeScreen() {
  const url = "https://type.fit/api/quotes";
  
  return(
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-16 bg-red-100`}>
        <Header title='Quotes of the Day'/>
        </View>

        <AddQuote />
      </SafeAreaView>
  );
}

export default HomeScreen;
