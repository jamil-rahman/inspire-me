import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames'

function FavoritesScreen() {
  return(
      <SafeAreaView>
          <Text style={tw`font-semibold p-10`}> This is FavoritesScreen</Text>
      </SafeAreaView>
  );
}

export default FavoritesScreen;
