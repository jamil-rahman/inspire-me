import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function HomeScreen() {
  return(
      <SafeAreaView>
          <Text style={tw`font-semibold p-10`}> This is HomeScreen</Text>
      </SafeAreaView>
  );
}

export default HomeScreen;
