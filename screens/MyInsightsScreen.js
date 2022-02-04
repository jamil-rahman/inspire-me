import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function MyInsightsScreen() {
  return(
      <SafeAreaView style={tw `bg-white h-full`}>
         <Text style={tw`font-semibold p-10`}>Hi, Mom</Text>
      </SafeAreaView>
  );
}

export default MyInsightsScreen;
