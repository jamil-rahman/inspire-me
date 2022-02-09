import React from "react";
import { SafeAreaView, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";

function FavoritesScreen() {
  return (
    <SafeAreaView>
      <View style={tw`p-16 bg-gray-100`}>
        <Header title="Favorites" />
      </View>
    </SafeAreaView>
  );
}

export default FavoritesScreen;
