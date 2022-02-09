import React from "react";
import {useNavigation} from '@react-navigation/native';
import tw from "tailwind-react-native-classnames";
import {View, TouchableOpacity, Text} from 'react-native'

function AddQuote() {
  const navigation = useNavigation();
  return (
    <View style={tw`mt-auto border-gray-200`}>
      <TouchableOpacity style={tw`bg-white py-3 m-3 border-2 rounded-full border-black`}
        onPress={()=>navigation.navigate('FavoritesScreen')}
      >
        <Text style={tw`text-center text-black text-xl`}>Add your Quote</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddQuote;
